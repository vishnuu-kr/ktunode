---
title: "preservation of pure Nash equilibrium (PSNE)"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 1: Introduction to Game Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5b1"
status: "completed"
scrapedAt: "2026-05-20T17:06:27.071Z"
---
# GAME THEORY AND MECHANISM DESIGN

## Module 1: Introduction to Game Theory

### Topic: Preservation of Pure Nash Equilibrium (PSNE)

---

### Learning Outcomes

By the end of this topic, you will be able to:

*   Understand the concept of a pure Nash equilibrium (NE).
*   Define and explain the conditions for the preservation of a pure Nash equilibrium.
*   Identify how changes in game parameters or player preferences can affect the existence or stability of a pure Nash equilibrium.
*   Analyze simple games to determine if a pure Nash equilibrium is preserved under specific perturbations.
*   Appreciate the practical significance of PSNE in various strategic interactions.

---

### 1. Introduction to Pure Nash Equilibrium (NE)

This section lays the groundwork for understanding the preservation of NE.

#### 1.1. What is a Game?

In game theory, a **game** is a situation involving strategic interaction between two or more rational decision-makers (players). Key components of a game include:

*   **Players:** The individuals or entities making decisions.
*   **Strategies:** The set of possible actions each player can take.
*   **Payoffs:** The outcomes or rewards each player receives for each combination of strategies played by all players.

#### 1.2. What is a Pure Strategy?

A **pure strategy** is a specific action a player commits to taking in a given situation. It's a deterministic choice, unlike a mixed strategy where a player randomizes over several pure strategies.

#### 1.3. Definition of Pure Nash Equilibrium (NE)

A **pure Nash equilibrium (NE)** is a state in a game where no player can improve their payoff by unilaterally changing their strategy, assuming all other players keep their strategies unchanged.

*   **Key Idea:** In an NE, each player's chosen strategy is the best response to the strategies chosen by the other players.

#### 1.4. Representing Games: Normal Form (Matrix Form)

For games with a finite number of players and strategies, the **normal form** or **matrix form** is commonly used to represent the game. It lists:

*   The players.
*   The strategies available to each player.
*   The payoffs for each player for every possible combination of strategies.

**Example: Prisoner's Dilemma**

|             | Player 2: Cooperate | Player 2: Defect |
| :---------- | :------------------ | :--------------- |
| **Player 1: Cooperate** | (-1, -1)            | (-10, 0)         |
| **Player 1: Defect**    | (0, -10)            | (-5, -5)         |

*   **Players:** Player 1, Player 2
*   **Strategies:** Cooperate (C), Defect (D)
*   **Payoffs:** (Player 1's payoff, Player 2's payoff)

#### 1.5. Finding Pure Nash Equilibria

To find a PSNE in a normal-form game:

1.  **For each player, identify their best response(s) to each of the other players' possible strategies.**
2.  **A cell in the payoff matrix represents a PSNE if and only if each player's strategy in that cell is a best response to the other player's strategy in that same cell.**

**Example: Prisoner's Dilemma (Finding NE)**

*   **Player 1:**
    *   If Player 2 Cooperates: P1 prefers Defect (0 > -1).
    *   If Player 2 Defects: P1 prefers Defect (-5 > -10).
    *   Player 1's best response is always to Defect.
*   **Player 2:**
    *   If Player 1 Cooperates: P2 prefers Defect (0 > -1).
    *   If Player 1 Defects: P2 prefers Defect (-5 > -10).
    *   Player 2's best response is always to Defect.

The cell where both players choose Defect (D, D) is the PSNE. In this cell:
*   Player 1 chooses D, which is their best response to Player 2 choosing D.
*   Player 2 chooses D, which is their best response to Player 1 choosing D.

---

### 2. Preservation of Pure Nash Equilibrium (PSNE)

This section delves into what happens to NE when the game changes.

#### 2.1. What Does "Preservation" Mean?

The **preservation of a pure Nash equilibrium** refers to the continued existence or stability of a PSNE outcome when certain parameters or aspects of the game are altered. This can mean:

*   **Existence:** A PSNE that existed before the change still exists after the change.
*   **Stability:** The PSNE remains a focal point or is robust to small perturbations in strategies or payoffs.

#### 2.2. Factors Affecting PSNE Preservation

Changes in several aspects of a game can impact its PSNE:

*   **Changes in Payoffs:** Altering the numerical values of payoffs for players.
*   **Changes in Strategy Sets:** Adding or removing available strategies for players.
*   **Changes in Player Preferences:** While often captured by payoffs, sometimes preferences can be modeled more directly (e.g., altruism, fairness).
*   **Information Structure:** Changes in what players know about each other's strategies or payoffs.
*   **Number of Players:** Adding or removing players.

#### 2.3. Analyzing Preservation: Best Response Functions

A powerful tool for analyzing PSNE is the concept of **best response functions**.

*   **Best Response Function ($BR_i(s_{-i})$):** For player $i$, the best response function maps each possible strategy profile of the other players ($s_{-i}$) to player $i$'s best pure strategy (or set of best pure strategies).

A strategy profile ($s_1^*, s_2^*, ..., s_n^*$) is a PSNE if and only if $s_i^* \in BR_i(s_{-i}^*)$ for all players $i$.

**Preservation Analysis:** When a game is perturbed, we re-evaluate the best response functions. If the profile that was previously a PSNE remains a mutual best response in the new game, the PSNE is preserved.

#### 2.4. Examples of PSNE Preservation (or Lack Thereof)

Let's consider variations of the Prisoner's Dilemma.

**Example 1: Prisoner's Dilemma with Slightly Lower Defect Payoff**

Suppose the payoff for (Defect, Defect) changes from (-5, -5) to (-4, -4).

|             | Player 2: Cooperate | Player 2: Defect |
| :---------- | :------------------ | :--------------- |
| **Player 1: Cooperate** | (-1, -1)            | (-10, 0)         |
| **Player 1: Defect**    | (0, -10)            | **(-4, -4)**     |

*   **Player 1's Best Responses:**
    *   If P2 Cooperates: P1 prefers Defect (0 > -1).
    *   If P2 Defects: P1 prefers Defect (-4 > -10).
    *   Still always Defect.
*   **Player 2's Best Responses:**
    *   If P1 Cooperates: P2 prefers Defect (0 > -1).
    *   If P1 Defects: P2 prefers Defect (-4 > -10).
    *   Still always Defect.

**Conclusion:** The PSNE (Defect, Defect) is **preserved**. The change in payoff was not enough to alter the dominant strategy for either player.

**Example 2: Prisoner's Dilemma with Significantly Lower Defect Payoff**

Suppose the payoff for (Defect, Defect) changes from (-5, -5) to (-12, -12).

|             | Player 2: Cooperate | Player 2: Defect |
| :---------- | :------------------ | :--------------- |
| **Player 1: Cooperate** | (-1, -1)            | (-10, 0)         |
| **Player 1: Defect**    | (0, -10)            | **(-12, -12)**   |

*   **Player 1's Best Responses:**
    *   If P2 Cooperates: P1 prefers Defect (0 > -1).
    *   If P2 Defects: P1 prefers Cooperate (-10 > -12).
    *   Player 1's best response now depends on Player 2's action.
*   **Player 2's Best Responses:**
    *   If P1 Cooperates: P2 prefers Defect (0 > -1).
    *   If P1 Defects: P2 prefers Cooperate (-10 > -12).
    *   Player 2's best response now depends on Player 1's action.

Now, let's check for mutual best responses:
*   (C, C): P1's best response to C is D. P2's best response to C is D. Not an NE.
*   (C, D): P1's best response to D is C. P2's best response to C is D. This *is* a mutual best response. (C, D) is a PSNE.
*   (D, C): P1's best response to C is D. P2's best response to D is C. This *is* a mutual best response. (D, C) is a PSNE.
*   (D, D): P1's best response to D is C. P2's best response to D is C. Not an NE.

**Conclusion:** The original PSNE (Defect, Defect) is **not preserved**. Instead, two new PSNEs, (Cooperate, Defect) and (Defect, Cooperate), emerge.

#### 2.5. Robustness of PSNE

A PSNE is considered **robust** or **stable** if it is preserved under small, plausible perturbations of the game.

*   **Dominant Strategies:** If a PSNE arises from dominant strategies (as in the original Prisoner's Dilemma), it is generally very robust. A dominant strategy is a player's best response regardless of what other players do, so slight payoff changes are unlikely to alter it.
*   **Non-Dominant Strategies:** PSNE that do not arise from dominant strategies might be less robust and more sensitive to changes.

#### 2.6. Coordination Games and PSNE Preservation

**Coordination Games** are games where players benefit from coordinating their actions. They often have multiple PSNE. The preservation of these PSNE is a key concern.

**Example: Battle of the Sexes**

|             | Player 2: Opera | Player 2: Football |
| :---------- | :-------------- | :----------------- |
| **Player 1: Opera** | (2, 1)          | (0, 0)             |
| **Player 1: Football** | (0, 0)          | (1, 2)             |

*   **PSNE:** (Opera, Opera) and (Football, Football).
*   **Preservation:**
    *   If Player 1's payoff for (Opera, Opera) slightly decreases (e.g., to (1.9, 1)), (Opera, Opera) might still be an NE if the other payoffs remain the same.
    *   If Player 2's payoff for (Opera, Opera) decreases significantly (e.g., to (0.1, 1)), players might shift their preference, and (Opera, Opera) might cease to be an NE.

The existence of multiple PSNE in coordination games raises questions about which equilibrium is likely to be chosen. Factors like focal points or slight shifts in payoffs can influence which PSNE is preserved or selected.

---

### 3. Key Concepts and Definitions Recap

*   **Game:** A situation of strategic interaction between rational players.
*   **Player:** A decision-maker in a game.
*   **Strategy:** A specific plan of action for a player.
*   **Pure Strategy:** A deterministic choice of action.
*   **Payoff:** The utility or reward a player receives.
*   **Normal Form (Matrix Form):** A way to represent games by listing strategies and payoffs.
*   **Best Response Function ($BR_i(s_{-i})$):** Player $i$'s strategy that maximizes their payoff given the strategies of others ($s_{-i}$).
*   **Pure Nash Equilibrium (PSNE):** A strategy profile where no player can unilaterally improve their payoff. Each player's strategy is a best response to others.
*   **Preservation of PSNE:** The continued existence or stability of a PSNE after changes to the game.
*   **Robustness:** The property of a PSNE to remain an equilibrium under small perturbations.
*   **Dominant Strategy:** A strategy that is a best response regardless of other players' actions.

---

### 4. Important Points to Remember

*   **Rationality Assumption:** Game theory assumes players are rational and aim to maximize their own payoffs.
*   **Unilateral Deviation:** The core of NE is that no player wants to deviate *alone*.
*   **Best Response is Key:** Always focus on identifying best responses to determine NE.
*   **Sensitivity to Changes:** PSNE can be sensitive to changes in payoffs, strategy sets, or other game parameters.
*   **Dominant Strategies Imply Robust NE:** PSNE supported by dominant strategies are generally robust.
*   **Coordination Games:** Often have multiple PSNE, making the question of which one is realized or preserved crucial.
*   **"Preservation" means "still an NE":** If a strategy profile was an NE and remains an NE after changes, it is preserved. If it ceases to be an NE, it is not preserved.

---

### 5. Practice Questions and Exercises

**Question 1:**
Consider the following game:

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | (3, 2)         | (1, 1)          |
| **Player 1: Down** | (2, 1)         | (0, 0)          |

a) Identify all pure Nash equilibria in this game.
b) For Player 1, what is their best response to Player 2 playing Left? To Player 2 playing Right?
c) For Player 2, what is their best response to Player 1 playing Up? To Player 1 playing Down?

**Question 2:**
Suppose the game in Question 1 is modified such that the payoff for (Up, Left) becomes (4, 2).

|             | Player 2: Left | Player 2: Right |
| :---------- | :------------- | :-------------- |
| **Player 1: Up** | (4, 2)         | (1, 1)          |
| **Player 1: Down** | (2, 1)         | (0, 0)          |

a) Does the pure Nash equilibrium (Up, Left) from the original game remain preserved? Explain why or why not.
b) Are there any new pure Nash equilibria in the modified game?

**Question 3:**
In a coordination game, multiple PSNE often exist. Why is the concept of "preservation" important in such games?

---

### 6. Answers to Practice Questions

**Answer 1:**

a) To find the PSNE:
    *   **Player 1's Best Responses:**
        *   If P2 plays Left: P1 prefers Up (3 > 2).
        *   If P2 plays Right: P1 prefers Up (1 > 0).
        *   Player 1 has a dominant strategy: Up.
    *   **Player 2's Best Responses:**
        *   If P1 plays Up: P2 prefers Left (2 > 1).
        *   If P1 plays Down: P2 prefers Left (1 > 0).
        *   Player 2 has a dominant strategy: Left.

    The PSNE is where both players play their dominant strategies.
    **PSNE: (Up, Left)**

b) Player 1's best response to Player 2 playing Left is **Up**.
    Player 1's best response to Player 2 playing Right is **Up**.

c) Player 2's best response to Player 1 playing Up is **Left**.
    Player 2's best response to Player 1 playing Down is **Left**.

**Answer 2:**

a) Let's re-evaluate best responses in the modified game:
    *   **Player 1's Best Responses:**
        *   If P2 plays Left: P1 prefers Up (4 > 2).
        *   If P2 plays Right: P1 prefers Up (1 > 0).
        *   Player 1's dominant strategy remains Up.
    *   **Player 2's Best Responses:**
        *   If P1 plays Up: P2 prefers Left (2 > 1).
        *   If P1 plays Down: P2 prefers Left (1 > 0).
        *   Player 2's dominant strategy remains Left.

    Since both players' dominant strategies (and thus their best responses) remain the same, the strategy profile (Up, Left) continues to be a mutual best response. Therefore, the pure Nash equilibrium **(Up, Left) is preserved**.

b) No, there are no new pure Nash equilibria. The original dominant strategies for both players continue to hold, leading to the unique PSNE (Up, Left).

**Answer 3:**

In coordination games, players want to choose the same or compatible actions to achieve a better outcome. Often, there are multiple such outcomes that are mutually best responses. The concept of "preservation" is important because:

1.  **Focal Points:** If a particular PSNE is perceived as a "focal point" or focal equilibrium, understanding how robust it is to minor changes in payoffs or information is crucial for predicting behavior. If a slight change can cause a PSNE to disappear, it might not be a reliable focal point.
2.  **Stability:** Players might rely on the stability of an equilibrium. If a commonly agreed-upon or perceived equilibrium is easily destroyed by small changes, it might lead to uncertainty or a search for alternative equilibria.
3.  **Policy/Mechanism Design:** When designing mechanisms to encourage certain outcomes, understanding which equilibria are likely to be preserved under various conditions is essential for ensuring the mechanism's effectiveness. For instance, if a policy aims to lead to a specific coordinated outcome, it needs to ensure that this outcome remains an equilibrium even with some variability in player payoffs or beliefs.

---
