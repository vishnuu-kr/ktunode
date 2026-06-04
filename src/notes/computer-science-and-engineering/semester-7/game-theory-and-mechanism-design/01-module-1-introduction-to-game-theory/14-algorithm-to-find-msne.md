---
title: "algorithm to find MSNE"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 1: Introduction to Game Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5b8"
status: "completed"
scrapedAt: "2026-05-20T17:06:31.970Z"
---
# GAME THEORY AND MECHANISM DESIGN

## Module 1: Introduction to Game Theory

### Topic: Algorithms to Find Mixed Strategy Nash Equilibria (MSNE)

---

### Learning Outcomes:

*   Understand the definition and characteristics of a Mixed Strategy Nash Equilibrium (MSNE).
*   Identify the conditions required for an MSNE to exist in a given game.
*   Learn and apply algorithms or systematic approaches to find MSNE.
*   Analyze the properties and implications of MSNE.

---

### 1. What is a Mixed Strategy Nash Equilibrium (MSNE)?

*   **Definition:** An MSNE is a profile of mixed strategies, one for each player, such that no player can improve their expected payoff by unilaterally changing their own mixed strategy, given the mixed strategies of the other players.
*   **Mixed Strategy:** A probability distribution over the pure strategies available to a player. A player chooses their actions randomly according to these probabilities.
*   **Key Property:** In an MSNE, if a player is playing a mixed strategy that assigns positive probability to multiple pure strategies, then that player must be indifferent between playing any of those pure strategies. This indifference is crucial for finding MSNE.

---

### 2. Conditions for MSNE Existence

*   **Finite Games:** According to Nash's theorem (1951), every finite game of perfect information (where players move sequentially and know all previous moves) has at least one Nash Equilibrium, which can be in pure or mixed strategies.
*   **The Indifference Principle:** For a player to be willing to randomize between two or more pure strategies, the expected payoff from playing each of those pure strategies must be equal, given the opponent's mixed strategy.

---

### 3. Algorithms/Approaches to Find MSNE

Finding MSNE can be challenging, especially in games with more than two players or a large number of strategies. Here are common approaches:

#### 3.1. The Indifference Method (for 2x2 Games)

This is the most straightforward method for two-player, two-strategy games.

**Steps:**

1.  **Define the Game:** Represent the game in a payoff matrix. Let Player 1 have strategies $\{U, D\}$ and Player 2 have strategies $\{L, R\}$.
    *   Payoff Matrix:
        |         | L         | R         |
        | :------ | :-------- | :-------- |
        | **U**   | (a, e)    | (b, f)    |
        | **D**   | (c, g)    | (d, h)    |
    *   Where $(x, y)$ denotes (Payoff to Player 1, Payoff to Player 2).

2.  **Assume a Mixed Strategy Profile:**
    *   Let Player 1 play U with probability $p$ and D with probability $1-p$, where $0 < p < 1$.
    *   Let Player 2 play L with probability $q$ and R with probability $1-q$, where $0 < q < 1$.

3.  **Apply the Indifference Principle for Player 1:**
    *   Player 1 must be indifferent between playing U and D, given Player 2's strategy $(q, 1-q)$.
    *   Expected Payoff for Player 1 playing U: $E_1(U) = a \cdot q + b \cdot (1-q)$
    *   Expected Payoff for Player 1 playing D: $E_1(D) = c \cdot q + d \cdot (1-q)$
    *   Set them equal: $a \cdot q + b \cdot (1-q) = c \cdot q + d \cdot (1-q)$
    *   Solve for $q$:
        $aq + b - bq = cq + d - dq$
        $aq - bq - cq + dq = d - b$
        $q(a - b - c + d) = d - b$
        $q = \frac{d - b}{(a - b - c + d)}$

4.  **Apply the Indifference Principle for Player 2:**
    *   Player 2 must be indifferent between playing L and R, given Player 1's strategy $(p, 1-p)$.
    *   Expected Payoff for Player 2 playing L: $E_2(L) = e \cdot p + g \cdot (1-p)$
    *   Expected Payoff for Player 2 playing R: $E_2(R) = f \cdot p + h \cdot (1-p)$
    *   Set them equal: $e \cdot p + g \cdot (1-p) = f \cdot p + h \cdot (1-p)$
    *   Solve for $p$:
        $ep + g - gp = fp + h - hp$
        $ep - gp - fp + hp = h - g$
        $p(e - g - f + h) = h - g$
        $p = \frac{h - g}{(e - g - f + h)}$

5.  **Check for Validity:** The calculated probabilities $p$ and $q$ must be strictly between 0 and 1 ($0 < p < 1$, $0 < q < 1$). If either $p$ or $q$ falls outside this range (e.g., $p=0$ or $p=1$), it indicates that there is no MSNE where both players strictly mix all their strategies. In such cases, there might be pure strategy Nash Equilibria or MSNE where only one player mixes.

**Example: Matching Pennies**

|         | H         | T         |
| :------ | :-------- | :-------- |
| **H**   | (1, -1)   | (-1, 1)   |
| **T**   | (-1, 1)   | (1, -1)   |

*   Let Player 1 play H with probability $p$, T with $1-p$.
*   Let Player 2 play H with probability $q$, T with $1-q$.

*   **Player 1's indifference:**
    $E_1(H) = 1 \cdot q + (-1) \cdot (1-q) = q - 1 + q = 2q - 1$
    $E_1(T) = (-1) \cdot q + 1 \cdot (1-q) = -q + 1 - q = 1 - 2q$
    Set equal: $2q - 1 = 1 - 2q \implies 4q = 2 \implies q = 1/2$.

*   **Player 2's indifference:**
    $E_2(H) = (-1) \cdot p + 1 \cdot (1-p) = -p + 1 - p = 1 - 2p$
    $E_2(T) = 1 \cdot p + (-1) \cdot (1-p) = p - 1 + p = 2p - 1$
    Set equal: $1 - 2p = 2p - 1 \implies 4p = 2 \implies p = 1/2$.

*   **Result:** The unique MSNE is where both players play H with probability 1/2 and T with probability 1/2. This is a valid MSNE because $0 < p < 1$ and $0 < q < 1$.

#### 3.2. Generalizing the Indifference Method (for Larger Games)

For games larger than 2x2, the indifference method becomes more complex.

*   **Identify Potential Support:** An MSNE is characterized by the set of pure strategies each player uses with positive probability. This set is called the "support" of the mixed strategy.
*   **Hypothesize Supports:** We hypothesize different possible supports for each player. For example, in a 3x3 game, we might hypothesize Player 1 plays only their first two strategies, and Player 2 plays all three.
*   **Set up Indifference Equations:** For each hypothesized support, we set up a system of equations based on the indifference principle. If Player 1's support is $\{S_{1,1}, S_{1,2}, \dots, S_{1,k}\}$, then their expected payoff from playing any $S_{1,i}$ must be equal, given Player 2's mixed strategy.
*   **Solve the System of Equations:** Solve the system of linear equations for the probabilities.
*   **Check for Validity:**
    1.  All calculated probabilities must be non-negative and sum to 1 for each player.
    2.  The strategies *not* in the hypothesized support must yield an expected payoff *less than or equal to* the expected payoff of the strategies in the support. This is crucial to ensure players wouldn't switch to playing those "out-of-support" strategies.

**Example: A 2x3 Game**

|         | L         | M         | R         |
| :------ | :-------- | :-------- | :-------- |
| **U**   | (2, 1)    | (0, 0)    | (1, 2)    |
| **D**   | (0, 2)    | (1, 1)    | (0, 0)    |

Let Player 1 play U with probability $p$, D with $1-p$.
Let Player 2 play L with probability $q_L$, M with $q_M$, R with $q_R$, where $q_L + q_M + q_R = 1$.

**Scenario 1: Player 2 plays all strategies (MSNE where P2 mixes all).**
For Player 2 to mix L, M, and R, they must be indifferent between them, given Player 1's $(p, 1-p)$ strategy.

*   $E_2(L) = 1 \cdot p + 2 \cdot (1-p) = p + 2 - 2p = 2 - p$
*   $E_2(M) = 0 \cdot p + 1 \cdot (1-p) = 1 - p$
*   $E_2(R) = 2 \cdot p + 0 \cdot (1-p) = 2p$

For indifference:
$E_2(L) = E_2(M) \implies 2 - p = 1 - p \implies 2 = 1$ (Contradiction).
This means Player 2 cannot be indifferent between L and M if $p$ is such that they are playing all strategies. So, Player 2 will not mix all three strategies in this specific setup. This indicates we need to consider smaller supports for Player 2.

**Scenario 2: Player 2 plays L and R (Support for P2 is {L, R}).**
So, $q_M = 0$, $q_L + q_R = 1$.

*   **Player 1's indifference (between U and D):**
    $E_1(U) = 2 \cdot q_L + 1 \cdot q_R = 2q_L + q_R$
    $E_1(D) = 0 \cdot q_L + 0 \cdot q_R = 0$
    Set equal: $2q_L + q_R = 0$. Since $q_L, q_R \ge 0$, this implies $q_L = 0$ and $q_R = 0$. This contradicts $q_L + q_R = 1$. So, Player 1 will not play a mixed strategy if Player 2 only plays L and R.

*   **Player 2's indifference (between L and R), given P1 mixes:**
    $E_2(L) = 1 \cdot p + 2 \cdot (1-p) = 2 - p$
    $E_2(R) = 2 \cdot p + 0 \cdot (1-p) = 2p$
    Set equal: $2 - p = 2p \implies 3p = 2 \implies p = 2/3$.

*   **Check P1's best response:** If $p = 2/3$, what are Player 1's expected payoffs for U and D?
    $E_1(U)$ (given P2 plays L with $q_L$ and R with $q_R$): $2q_L + 0q_R + 1q_M$  (Wait, P2 plays L and R, so $q_L+q_R=1$)
    Given $p = 2/3$, Player 2 is indifferent between L and R. Let's assume P2 plays L and R with some probabilities $q_L, q_R$ that sum to 1.
    The indifference for P2 was $E_2(L) = 2-p$ and $E_2(R) = 2p$. So, P2 is indifferent if $p=2/3$.
    Now, check Player 1's payoffs assuming Player 2 mixes between L and R. This requires P1 to be indifferent between U and D *if* P1 also plays a mixed strategy.
    Let's re-evaluate the P1 indifference carefully.

Let's try finding pure strategies first for this game.
*   **Pure Strategy Analysis:**
    *   P1: If P2 plays L, P1 prefers U (2 > 0). If P2 plays M, P1 prefers D (1 > 0). If P2 plays R, P1 prefers U (1 > 0).
    *   P2: If P1 plays U, P2 prefers R (2 > 0, 1). If P1 plays D, P2 prefers L (2 > 1, 0).
    *   No pure strategy NE.

*   **Back to MSNE analysis:** We need to find a $(p, 1-p)$ and $(q_L, q_M, q_R)$ such that all players are maximizing their payoffs and any strategy played with positive probability yields the same expected payoff.

**Let's assume Player 2 mixes over {L, M} and Player 1 mixes over {U, D}.**
Support for P1: {U, D}, Support for P2: {L, M}.
So, $1-p$ for D, $q_L$ for L, $q_M$ for M, $q_R=0$.
$p + (1-p) = 1$
$q_L + q_M = 1$

*   **P1 Indifference (between U and D):**
    $E_1(U) = 2 \cdot q_L + 0 \cdot q_M = 2q_L$
    $E_1(D) = 0 \cdot q_L + 1 \cdot q_M = q_M$
    $2q_L = q_M$
    Since $q_L + q_M = 1$, we have $2q_L + q_L = 1 \implies 3q_L = 1 \implies q_L = 1/3$.
    Then $q_M = 2/3$.
    So, P2 plays L with 1/3, M with 2/3.

*   **P2 Indifference (between L and M):**
    $E_2(L) = 1 \cdot p + 2 \cdot (1-p) = 1p + 2 - 2p = 2 - p$
    $E_2(M) = 0 \cdot p + 1 \cdot (1-p) = 1 - p$
    $2 - p = 1 - p \implies 2 = 1$ (Contradiction).
    This means P2 is *not* indifferent between L and M if P1 plays a mixed strategy $(p, 1-p)$ and P2 is mixing over L and M. So, this assumed support is invalid.

**Let's assume Player 2 mixes over {L, R} and Player 1 mixes over {U, D}.**
Support for P1: {U, D}, Support for P2: {L, R}.
So, $1-p$ for D, $q_L$ for L, $q_R$ for R, $q_M=0$.
$p + (1-p) = 1$
$q_L + q_R = 1$

*   **P1 Indifference (between U and D):**
    $E_1(U) = 2 \cdot q_L + 1 \cdot q_R = 2q_L + q_R$
    $E_1(D) = 0 \cdot q_L + 0 \cdot q_R = 0$
    $2q_L + q_R = 0$. This implies $q_L=0, q_R=0$, contradicting $q_L+q_R=1$. P1 will not mix if P2 plays only L and R.

**Let's assume Player 1 mixes over {U, D} and Player 2 mixes over {M, R}.**
Support for P1: {U, D}, Support for P2: {M, R}.
So, $1-p$ for D, $q_M$ for M, $q_R$ for R, $q_L=0$.
$p + (1-p) = 1$
$q_M + q_R = 1$

*   **P1 Indifference (between U and D):**
    $E_1(U) = 0 \cdot q_M + 1 \cdot q_R = q_R$
    $E_1(D) = 1 \cdot q_M + 0 \cdot q_R = q_M$
    $q_R = q_M$
    Since $q_M + q_R = 1$, we have $q_M + q_M = 1 \implies 2q_M = 1 \implies q_M = 1/2$.
    Then $q_R = 1/2$.
    So, P2 plays M with 1/2, R with 1/2.

*   **P2 Indifference (between M and R):**
    $E_2(M) = 0 \cdot p + 1 \cdot (1-p) = 1 - p$
    $E_2(R) = 2 \cdot p + 0 \cdot (1-p) = 2p$
    $1 - p = 2p \implies 3p = 1 \implies p = 1/3$.
    Then $1-p = 2/3$.
    So, P1 plays U with 1/3, D with 2/3.

*   **Validity Check:**
    *   P1 probabilities: $p=1/3, 1-p=2/3$. These are valid (between 0 and 1).
    *   P2 probabilities: $q_M=1/2, q_R=1/2$. These are valid (between 0 and 1).

    Now, check if P1 would deviate from {U, D} and if P2 would deviate from {M, R}.
    *   **Check P1's choice:** P1 is mixing U and D, so $E_1(U) = E_1(D)$ given P2's strategy.
        $E_1(U) = q_R = 1/2$.
        $E_1(D) = q_M = 1/2$.
        These are equal. What about the strategy not in P1's support, L?
        $E_1(L) = 2 \cdot q_M + 0 \cdot q_R = 2 \cdot (1/2) + 0 \cdot (1/2) = 1$.
        Player 1's expected payoff from U or D is 1/2. Player 1's expected payoff from L is 1.
        Since $E_1(L) > E_1(U) = E_1(D)$, Player 1 would prefer to play L instead of mixing U and D.
        This means our assumption of P1 playing {U, D} is invalid. P1 would deviate to L.

**This iterative process of hypothesizing supports and checking validity is the core of the indifference method for larger games. It can be tedious.**

#### 3.3. Computational Methods (for Larger/Complex Games)

For games with many players or strategies, analytical solutions become intractable. Computational methods are used.

*   **Linear Complementarity Problems (LCPs):** Many MSNE problems can be formulated as LCPs, which can be solved efficiently by specialized algorithms (e.g., Lemke-Howson algorithm).
*   **Iterated Best Response / Fictitious Play:** These are adaptive learning processes where players repeatedly adjust their strategies to best respond to the observed history of play from other players. In some cases, these processes converge to a Nash Equilibrium.
*   **Support Enumeration Algorithms:** Systematically enumerate all possible supports and check for Nash equilibria. This is computationally expensive but guarantees finding all MSNE if it can be completed.

---

### 4. Properties and Implications of MSNE

*   **Welfare:** MSNE can sometimes lead to higher total welfare than pure strategy equilibria, especially in coordination games where players might end up with lower payoffs in pure strategies due to coordination failures.
*   **Security:** In zero-sum games, MSNE are crucial as they define the security levels (maximin payoffs) for players. The minimax theorem states that in finite two-player zero-sum games, the maximin value equals the minimax value, and this value is achieved by a Nash equilibrium (which can be mixed).
*   **Bluffing and Deception:** MSNE naturally incorporate elements of bluffing and deception. For instance, in poker, a player might mix between betting and checking to make their strategy unpredictable and harder for opponents to exploit.
*   **Unpredictability:** The primary advantage of playing a mixed strategy is unpredictability. If an opponent can perfectly predict your actions, they can exploit that predictability. Mixing strategies makes it impossible for opponents to know with certainty what action you will take.

---

### 5. Practice Questions/Exercises

**Question 1:**
Consider the following game:

|         | Left      | Right     |
| :------ | :-------- | :-------- |
| **Up**  | (3, 2)    | (1, 1)    |
| **Down**| (0, 0)    | (2, 3)    |

Find the mixed strategy Nash Equilibrium for this game.

**Question 2:**
Suppose in a 2x2 game, the payoff matrix for Player 1 is:

|         | L     | R     |
| :------ | :---- | :---- |
| **U**   | 4     | 0     |
| **D**   | 1     | 3     |

And the payoff matrix for Player 2 is:

|         | L     | R     |
| :------ | :---- | :---- |
| **U**   | 1     | 3     |
| **D**   | 0     | 2     |

Find the mixed strategy Nash Equilibrium for this game.

**Question 3:**
Explain why a player might choose to play a mixed strategy even if there are pure strategy Nash Equilibria.

---

### 6. Answers to Practice Questions

**Answer 1:**
Let Player 1 play Up with probability $p$ and Down with $1-p$.
Let Player 2 play Left with probability $q$ and Right with $1-q$.

*   **Player 1's indifference:**
    $E_1(U) = 3q + 1(1-q) = 3q + 1 - q = 2q + 1$
    $E_1(D) = 0q + 2(1-q) = 2 - 2q$
    Set equal: $2q + 1 = 2 - 2q \implies 4q = 1 \implies q = 1/4$.

*   **Player 2's indifference:**
    $E_2(L) = 2p + 0(1-p) = 2p$
    $E_2(R) = 1p + 3(1-p) = p + 3 - 3p = 3 - 2p$
    Set equal: $2p = 3 - 2p \implies 4p = 3 \implies p = 3/4$.

*   **Result:** The MSNE is Player 1 plays Up with probability 3/4 and Down with 1/4, and Player 2 plays Left with probability 1/4 and Right with 3/4.
    Both $p=3/4$ and $q=1/4$ are between 0 and 1, so this is a valid MSNE.

**Answer 2:**
*   **Player 1's indifference:**
    $E_1(U) = 4q + 0(1-q) = 4q$
    $E_1(D) = 1q + 3(1-q) = q + 3 - 3q = 3 - 2q$
    Set equal: $4q = 3 - 2q \implies 6q = 3 \implies q = 1/2$.

*   **Player 2's indifference:**
    $E_2(L) = 1p + 0(1-p) = p$
    $E_2(R) = 3p + 2(1-p) = 3p + 2 - 2p = p + 2$
    Set equal: $p = p + 2 \implies 0 = 2$. This is a contradiction.

    This contradiction means Player 2 will never be indifferent between L and R if Player 1 plays a mixed strategy. Let's check Player 2's payoffs:
    $E_2(L) = p$
    $E_2(R) = p + 2$
    Since $p$ is a probability, $p \ge 0$. Therefore, $E_2(R) = p + 2 > p = E_2(L)$ for any valid $p$.
    This implies Player 2 will *always* prefer to play Right, regardless of Player 1's strategy.
    So, Player 2's best response is always R ($q=0, 1-q=1$).

    Now, let's check Player 1's best response to Player 2 playing R.
    $E_1(U \text{ | P2 plays R}) = 0$
    $E_1(D \text{ | P2 plays R}) = 3$
    Player 1 prefers to play Down.
    So, (Down, Right) is a pure strategy Nash Equilibrium.
    There is no MSNE where both players strictly mix all their strategies.

**Answer 3:**
A player might choose to play a mixed strategy even if pure strategy Nash Equilibria exist for several reasons:

*   **Unpredictability:** The primary reason is to become unpredictable. If an opponent can perfectly predict your actions, they can exploit that predictability to maximize their own payoff. By randomizing, you make it impossible for the opponent to know your next move, thereby preventing them from counteracting your strategy effectively.
*   **Preventing Exploitation:** In games where a player has a dominant strategy leading to a pure strategy NE, if the opponent knows this dominant strategy, they can adjust their play to exploit it. Mixing can deter such exploitation.
*   **Security Level (Maximin):** In zero-sum games, mixed strategies are essential to find the security level (maximin payoff). Playing a mixed strategy ensures a minimum payoff regardless of the opponent's actions, even if the opponent plays optimally to minimize your payoff.
*   **Higher Expected Payoffs:** In some coordination games or games with multiple pure strategy Nash Equilibria, playing a mixed strategy might offer a higher *expected* payoff on average over time compared to committing to a single pure strategy, especially if the opponent is also playing strategically. For example, in rock-paper-scissors, the mixed strategy (1/3, 1/3, 1/3) is the only NE and prevents being exploited.

---

### Important Points to Remember:

*   **Indifference Principle:** For a player to mix between two or more pure strategies, they must be indifferent between playing any of those strategies, given the other players' strategies.
*   **Support:** The set of pure strategies played with positive probability in a mixed strategy.
*   **Validity Check:** When calculating MSNE probabilities ($p$ and $q$), always ensure they are strictly between 0 and 1. If they are 0 or 1, it implies a pure strategy or a degenerate mixed strategy. For larger games, also check that strategies *not* in the support do not offer a better payoff.
*   **Computational Complexity:** Finding MSNE becomes computationally intensive as the number of players and strategies increases.
*   **MSNE vs. PSNE:** Mixed strategy equilibria are a generalization of pure strategy equilibria. A pure strategy can be seen as a mixed strategy where one strategy has a probability of 1.
*   **Zero-Sum Games:** MSNE are fundamental to understanding security levels and the minimax theorem in zero-sum games.
*   **Unpredictability is Key:** The strategic value of MSNE often lies in making one's own actions unpredictable to opponents.
