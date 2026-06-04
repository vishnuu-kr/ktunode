---
title: "mixed strategy Nash equilibrium (MSNE)"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 1: Introduction to Game Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5b5"
status: "completed"
scrapedAt: "2026-05-20T17:06:29.859Z"
---
# Game Theory and Mechanism Design: Module 1 - Introduction to Game Theory

## Topic: Mixed Strategy Nash Equilibrium (MSNE)

---

### **1. Introduction to Mixed Strategies**

#### **1.1. What is a Mixed Strategy?**

*   A **mixed strategy** is a probability distribution over the set of pure strategies available to a player.
*   Instead of choosing a single action deterministically, a player using a mixed strategy randomly selects among their pure strategies with certain probabilities.
*   **Notation:** If a player has pure strategies $S = \{s_1, s_2, ..., s_n\}$, their mixed strategy $\sigma$ is a probability vector $(\sigma(s_1), \sigma(s_2), ..., \sigma(s_n))$ such that $\sigma(s_i) \ge 0$ for all $i$ and $\sum_{i=1}^n \sigma(s_i) = 1$.

#### **1.2. Why Use Mixed Strategies?**

*   **Unpredictability:** Mixed strategies make a player's actions unpredictable to their opponent, which can be advantageous.
*   **Breaking Cycles:** In games where no pure strategy Nash equilibrium exists, mixed strategies are essential to find equilibrium outcomes.
*   **Indifference Principle:** Mixed strategies are often the result of players making their opponents indifferent between their pure strategies.

---

### **2. Expected Utility and Mixed Strategies**

#### **2.1. Calculating Expected Utility**

*   When a player uses a mixed strategy, their payoff is the **expected payoff** (or expected utility) calculated by averaging the payoffs of their pure strategies, weighted by the probabilities they assign to each.
*   Consider a player who chooses their pure strategy $s_i$ with probability $\sigma(s_i)$. If their opponent plays a strategy $\sigma'$, the player's expected payoff is:
    $E[\text{Payoff}] = \sum_{s_i \in S} \sigma(s_i) \times E[\text{Payoff} | \text{playing } s_i, \text{ opponent plays } \sigma']$
*   If the opponent's strategy is also mixed, the calculation becomes more complex, averaging over all possible combinations of pure strategies from both players.

#### **2.2. The Indifference Principle**

*   A key insight for finding MSNE is the **Indifference Principle**.
*   **Statement:** In a mixed strategy Nash equilibrium, if a player is mixing between two or more pure strategies, they must be indifferent between playing each of those pure strategies. This means the expected payoff from each of these pure strategies must be equal, given the opponent's mixed strategy.
*   **Rationale:** If a player strictly preferred one pure strategy over another, they would shift all their probability to the preferred strategy, thus not mixing.

---

### **3. Defining Mixed Strategy Nash Equilibrium (MSNE)**

#### **3.1. Formal Definition**

*   A profile of mixed strategies $(\sigma_1^*, \sigma_2^*, ..., \sigma_n^*)$ is a **Mixed Strategy Nash Equilibrium (MSNE)** if, for every player $i$, their mixed strategy $\sigma_i^*$ is a best response to the mixed strategies of all other players $(\sigma_{-i}^*)$.
*   This means that for any player $i$, playing $\sigma_i^*$ yields an expected payoff that is at least as high as playing any other mixed strategy $\sigma_i$, given that all other players $j \neq i$ are playing $\sigma_j^*$.
    $E[\text{Payoff}_i(\sigma_i^*, \sigma_{-i}^*)] \ge E[\text{Payoff}_i(\sigma_i, \sigma_{-i}^*)]$ for all valid mixed strategies $\sigma_i$.

#### **3.2. Conditions for MSNE**

*   **Support:** The set of pure strategies played with positive probability in an MSNE is called the **support** of the mixed strategy.
*   **Indifference Condition:** For a player $i$, all pure strategies $s_i$ in the support of their mixed strategy $\sigma_i^*$ must yield the same expected payoff, given the opponent's strategies $\sigma_{-i}^*$.
*   **Optimality Condition:** For a player $i$, any pure strategy $s_i'$ not in the support of $\sigma_i^*$ must yield an expected payoff less than or equal to the expected payoff of strategies in the support.

---

### **4. Finding MSNE in 2x2 Games**

*   This is a common and illustrative scenario for understanding MSNE.
*   Consider a 2x2 game with players Row (R) and Column (C), and their pure strategies are $\{U, D\}$ for Row and $\{L, R\}$ for Column.

    |         | L        | R        |
    | :------ | :------- | :------- |
    | **U**   | (a, e)   | (b, f)   |
    | **D**   | (c, g)   | (d, h)   |

*   Let Row's mixed strategy be $\sigma_R = (p, 1-p)$, where $p$ is the probability of playing U, and $1-p$ is the probability of playing D.
*   Let Column's mixed strategy be $\sigma_C = (q, 1-q)$, where $q$ is the probability of playing L, and $1-q$ is the probability of playing R.

#### **4.1. Finding Row's Best Response (Finding q for Column)**

*   Row will mix between U and D only if they are indifferent between U and D, given Column's strategy $(q, 1-q)$.
*   **Expected Payoff for Row playing U:** $E[\text{Payoff}_R(U, \sigma_C)] = q \cdot a + (1-q) \cdot b$
*   **Expected Payoff for Row playing D:** $E[\text{Payoff}_R(D, \sigma_C)] = q \cdot c + (1-q) \cdot d$
*   For indifference, these must be equal:
    $q \cdot a + (1-q) \cdot b = q \cdot c + (1-q) \cdot d$
    $qa + b - qb = qc + d - qd$
    $q(a - b - c + d) = d - b$
    $q = \frac{d - b}{(a - b) - (c - d)}$  (provided the denominator is not zero)

#### **4.2. Finding Column's Best Response (Finding p for Row)**

*   Column will mix between L and R only if they are indifferent between L and R, given Row's strategy $(p, 1-p)$.
*   **Expected Payoff for Column playing L:** $E[\text{Payoff}_C(\sigma_R, L)] = p \cdot e + (1-p) \cdot g$
*   **Expected Payoff for Column playing R:** $E[\text{Payoff}_C(\sigma_R, R)] = p \cdot f + (1-p) \cdot h$
*   For indifference, these must be equal:
    $p \cdot e + (1-p) \cdot g = p \cdot f + (1-p) \cdot h$
    $pe + g - pg = pf + h - ph$
    $p(e - g - f + h) = h - g$
    $p = \frac{h - g}{(e - g) - (f - h)}$ (provided the denominator is not zero)

#### **4.3. Conditions for the Mixed Strategy to be a Nash Equilibrium**

*   The calculated values of $p$ and $q$ must be valid probabilities, i.e., $0 < p < 1$ and $0 < q < 1$.
*   If $p=0$ or $p=1$ (or $q=0$ or $q=1$), it means the "mixed" strategy is actually a pure strategy, and we would have found a pure strategy Nash equilibrium. MSNE specifically refers to situations where both players are truly randomizing (probabilities strictly between 0 and 1).

---

### **5. Existence of Nash Equilibrium**

#### **5.1. The Nash Existence Theorem**

*   A fundamental result in game theory, the **Nash Existence Theorem**, guarantees that every finite game (a game with a finite number of players and a finite number of pure strategies for each player) has at least one Nash Equilibrium.
*   This equilibrium can be in pure strategies or in mixed strategies.

#### **5.2. Relationship between PSNE and MSNE**

*   A pure strategy Nash Equilibrium (PSNE) can be considered a special case of a mixed strategy Nash Equilibrium where the probabilities for the chosen pure strategy are 1, and 0 for all others.
*   Often, when finding equilibria, you first look for PSNE. If none exist, or if you want to find all equilibria, you then look for MSNE.

---

### **6. Example: Matching Pennies**

Consider the game of Matching Pennies:

|         | Heads    | Tails    |
| :------ | :------- | :------- |
| **Heads** | (1, -1)  | (-1, 1)  |
| **Tails** | (-1, 1)  | (1, -1)  |

*   **No Pure Strategy Nash Equilibrium:**
    *   If Row plays Heads, Column plays Tails.
    *   If Row plays Tails, Column plays Heads.
    *   If Column plays Heads, Row plays Heads.
    *   If Column plays Tails, Row plays Tails.
    No cell is a mutual best response.

*   **Finding the Mixed Strategy Nash Equilibrium:**
    *   Let Row's strategy be $(p, 1-p)$ (Heads, Tails).
    *   Let Column's strategy be $(q, 1-q)$ (Heads, Tails).

    *   **Row's Indifference:**
        *   $E[\text{Payoff}_R(\text{Heads}, \sigma_C)] = q \cdot 1 + (1-q) \cdot (-1) = q - 1 + q = 2q - 1$
        *   $E[\text{Payoff}_R(\text{Tails}, \sigma_C)] = q \cdot (-1) + (1-q) \cdot 1 = -q + 1 - q = 1 - 2q$
        *   For indifference: $2q - 1 = 1 - 2q \implies 4q = 2 \implies q = 1/2$.
        *   So, Column must play Heads with probability 1/2 and Tails with probability 1/2 to make Row indifferent.

    *   **Column's Indifference:**
        *   $E[\text{Payoff}_C(\sigma_R, \text{Heads})] = p \cdot (-1) + (1-p) \cdot 1 = -p + 1 - p = 1 - 2p$
        *   $E[\text{Payoff}_C(\sigma_R, \text{Tails})] = p \cdot 1 + (1-p) \cdot (-1) = p - 1 + p = 2p - 1$
        *   For indifference: $1 - 2p = 2p - 1 \implies 4p = 2 \implies p = 1/2$.
        *   So, Row must play Heads with probability 1/2 and Tails with probability 1/2 to make Column indifferent.

    *   **MSNE:** The unique Nash Equilibrium is when both players play Heads with probability 1/2 and Tails with probability 1/2.

---

### **7. Practice Questions and Exercises**

**Question 1:**
In a 2x2 game, player Row has strategies {A, B} and player Column has strategies {X, Y}. The payoffs are given by the matrix below.

|         | X        | Y        |
| :------ | :------- | :------- |
| **A**   | (3, 1)   | (0, 0)   |
| **B**   | (0, 0)   | (1, 3)   |

Find the Mixed Strategy Nash Equilibrium (MSNE) for this game.

**Solution 1:**
Let Row play A with probability $p$ and B with $1-p$.
Let Column play X with probability $q$ and Y with $1-q$.

*   **Row's Indifference:**
    *   $E[\text{Payoff}_R(A, \sigma_C)] = q \cdot 3 + (1-q) \cdot 0 = 3q$
    *   $E[\text{Payoff}_R(B, \sigma_C)] = q \cdot 0 + (1-q) \cdot 1 = 1-q$
    *   For indifference: $3q = 1-q \implies 4q = 1 \implies q = 1/4$.

*   **Column's Indifference:**
    *   $E[\text{Payoff}_C(\sigma_R, X)] = p \cdot 1 + (1-p) \cdot 0 = p$
    *   $E[\text{Payoff}_C(\sigma_R, Y)] = p \cdot 0 + (1-p) \cdot 3 = 3(1-p)$
    *   For indifference: $p = 3(1-p) \implies p = 3 - 3p \implies 4p = 3 \implies p = 3/4$.

*   **MSNE:** Row plays A with probability 3/4 and B with 1/4. Column plays X with probability 1/4 and Y with 3/4.

**Question 2:**
Consider the following game:

|         | Left     | Right    |
| :------ | :------- | :------- |
| **Up**  | (2, 2)   | (0, 0)   |
| **Down**| (0, 0)   | (1, 1)   |

Does this game have a MSNE? If so, find it.

**Solution 2:**
This game is a coordination game with two pure strategy Nash Equilibria: (Up, Left) and (Down, Right). We need to check if there's also a MSNE where players truly mix.

Let Row play Up with probability $p$ and Down with $1-p$.
Let Column play Left with probability $q$ and Right with $1-q$.

*   **Row's Indifference:**
    *   $E[\text{Payoff}_R(U, \sigma_C)] = q \cdot 2 + (1-q) \cdot 0 = 2q$
    *   $E[\text{Payoff}_R(D, \sigma_C)] = q \cdot 0 + (1-q) \cdot 1 = 1-q$
    *   For indifference: $2q = 1-q \implies 3q = 1 \implies q = 1/3$.

*   **Column's Indifference:**
    *   $E[\text{Payoff}_C(\sigma_R, L)] = p \cdot 2 + (1-p) \cdot 0 = 2p$
    *   $E[\text{Payoff}_C(\sigma_R, R)] = p \cdot 0 + (1-p) \cdot 1 = 1-p$
    *   For indifference: $2p = 1-p \implies 3p = 1 \implies p = 1/3$.

*   **MSNE:** Yes, there is a MSNE where Row plays Up with probability 1/3 and Down with 2/3. Column plays Left with probability 1/3 and Right with 2/3.

---

### **8. Important Points to Remember**

*   **Mixed strategies involve probabilities.** Players randomly choose between their pure strategies.
*   The **Indifference Principle** is the cornerstone of finding MSNE: players must be indifferent between the pure strategies they play with positive probability.
*   In a 2x2 game, the MSNE probabilities are derived by making the *opponent* indifferent.
*   **Nash Existence Theorem:** Every finite game has at least one Nash Equilibrium (pure or mixed).
*   **Support:** The set of pure strategies played with non-zero probability in an MSNE.
*   **Validity:** Calculated probabilities ($p, q$) must be strictly between 0 and 1 for a true mixed strategy. If they are 0 or 1, it implies a pure strategy.

---
