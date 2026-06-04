---
title: "Introduction to Game Theory - Competitive equilibrium"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 1: Introduction to Game Theory "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5ab"
status: "completed"
scrapedAt: "2026-05-20T17:06:23.009Z"
---
# GAME THEORY AND MECHANISM DESIGN: Module 1 - Introduction to Game Theory

## Topic: Introduction to Game Theory - Competitive Equilibrium

This module introduces the foundational concepts of Game Theory, focusing on the idea of a **Competitive Equilibrium**. We will explore how rational decision-makers interact in strategic environments and how these interactions can lead to predictable outcomes.

---

### Learning Outcomes:

By the end of this topic, you should be able to:

1.  **Define Game Theory** and its core components.
2.  **Understand the concept of a Strategic Interaction** and its significance.
3.  **Identify the key elements of a Game** (players, strategies, payoffs).
4.  **Explain the concept of Rationality** in the context of game theory.
5.  **Define and explain the concept of Competitive Equilibrium** in a general sense.
6.  **Differentiate between different types of games** (e.g., cooperative vs. non-cooperative, simultaneous vs. sequential).

---

### 1. Defining Game Theory

**Game Theory** is the study of **strategic interactions** among rational decision-makers. It provides a mathematical framework for analyzing situations where the outcome for each participant depends not only on their own actions but also on the actions of others.

**Key Concepts:**

*   **Strategic Interaction:** A situation where the outcome for each participant depends on the choices of multiple participants.
*   **Rationality:** The assumption that participants act in their own best interest, aiming to maximize their own utility or payoff.

**Example:**
Imagine a simple negotiation between two people over the price of an item. The final price will depend on the offers made by both the buyer and the seller, highlighting a strategic interaction.

---

### 2. Strategic Interaction and its Significance

Strategic interactions are ubiquitous in various fields, including economics, political science, biology, and computer science. Understanding them allows us to predict behavior, design better systems, and make more informed decisions.

**Key Concepts:**

*   **Interdependence of Outcomes:** My success depends on your actions, and your success depends on my actions.
*   **Anticipation of Others' Actions:** A crucial aspect is trying to anticipate what others will do in response to your own actions.

**Example:**
In a competitive market, a company's pricing strategy will influence its sales, but its sales will also be affected by the pricing strategies of its competitors. This is a classic example of strategic interaction.

---

### 3. Key Elements of a Game

To formally analyze a strategic interaction, we need to define the structure of the "game."

**Key Concepts:**

*   **Players:** The decision-makers involved in the game. These can be individuals, firms, countries, animals, etc.
*   **Strategies:** The complete plan of action that a player can take in any given situation within the game.
*   **Payoffs:** The outcomes or utilities that each player receives as a result of the combination of strategies chosen by all players. Payoffs are often represented numerically.

**Example: The Prisoner's Dilemma**

*   **Players:** Two suspects, Alice and Bob, arrested for a crime.
*   **Strategies:** Each suspect has two strategies:
    *   **Confess (C):** Betray the other suspect.
    *   **Remain Silent (S):** Cooperate with the other suspect.
*   **Payoffs:** The sentences (in years) are typically represented as negative payoffs (less is better):
    *   If Alice Confesses, Bob Stays Silent: Alice gets 0 years, Bob gets 10 years.
    *   If Alice Stays Silent, Bob Confesses: Alice gets 10 years, Bob gets 0 years.
    *   If both Confess: Both get 5 years.
    *   If both Stay Silent: Both get 1 year.

We can represent this in a payoff matrix:

|            | Bob Confesses (C) | Bob Stays Silent (S) |
| :--------- | :---------------- | :------------------- |
| **Alice Confesses (C)** | Alice: -5, Bob: -5  | Alice: 0, Bob: -10   |
| **Alice Stays Silent (S)** | Alice: -10, Bob: 0  | Alice: -1, Bob: -1   |

*(Note: Payoffs are often shown as utilities. In this case, lower sentences correspond to higher utilities. For simplicity, we use negative numbers to represent years, where -1 is better than -5, which is better than -10.)*

---

### 4. Understanding Rationality

The assumption of rationality is fundamental to most game theory analyses.

**Key Concepts:**

*   **Self-Interest:** Players aim to maximize their own payoffs.
*   **Maximization:** Players choose the strategy that yields the highest expected payoff, given their beliefs about what other players will do.
*   **Common Knowledge of Rationality:** Each player assumes that all other players are rational, and knows that they know this, and so on.

**Example:**
In the Prisoner's Dilemma, a rational Alice will consider what Bob might do. If Bob confesses, Alice is better off confessing (-5 years vs. -10 years). If Bob stays silent, Alice is still better off confessing (0 years vs. -1 year). Therefore, Alice has a dominant strategy to confess. The same logic applies to Bob.

---

### 5. Defining Competitive Equilibrium

A **Competitive Equilibrium** is a state in a strategic interaction where no player has an incentive to unilaterally change their strategy, given the strategies of all other players. It represents a stable outcome.

**Key Concepts:**

*   **Equilibrium:** A state of balance where forces are in opposition, producing no net effect. In game theory, it's a state where no player wants to deviate.
*   **Unilateral Deviation:** A player changing their strategy while all other players keep their strategies unchanged.
*   **No Incentive to Deviate:** If a player's chosen strategy is their best response to the strategies of others, they have no reason to change it.

**General Framework for Competitive Equilibrium:**

In a game with *N* players, a set of strategies $(s_1^*, s_2^*, \dots, s_N^*)$, where $s_i^*$ is the strategy chosen by player *i*, is a competitive equilibrium if for every player *i*:

$u_i(s_1^*, s_2^*, \dots, s_i^*, \dots, s_N^*) \ge u_i(s_1^*, s_2^*, \dots, s_i, \dots, s_N^*)$

for all possible strategies $s_i$ available to player *i*.

**Example: Nash Equilibrium (a common type of competitive equilibrium)**

The most common concept of competitive equilibrium in non-cooperative game theory is the **Nash Equilibrium**. A set of strategies is a Nash Equilibrium if each player's strategy is a best response to the strategies of the other players.

**Back to Prisoner's Dilemma:**
In the Prisoner's Dilemma, (Confess, Confess) is a Nash Equilibrium.
*   If Alice knows Bob will confess, her best response is to confess (-5 is better than -10).
*   If Bob knows Alice will confess, his best response is to confess (-5 is better than -10).
*   Neither player can improve their outcome by unilaterally changing their strategy.

**Important Point to Remember:**
A competitive equilibrium (like Nash Equilibrium) does **not** necessarily mean the outcome is the "best" for all players collectively. In the Prisoner's Dilemma, (Silent, Silent) is better for both players collectively (-1, -1) than (Confess, Confess) (-5, -5), but it is not a Nash Equilibrium because each player has an incentive to deviate if the other stays silent.

---

### 6. Differentiating Between Types of Games

Game theory categorizes games based on various characteristics.

**Key Concepts:**

*   **Cooperative vs. Non-Cooperative Games:**
    *   **Cooperative Games:** Players can form binding agreements (contracts). Focus is on coalition formation and payoff distribution.
    *   **Non-Cooperative Games:** Players cannot form binding agreements. Each player acts independently to maximize their own payoff. Most introductory game theory focuses on non-cooperative games.

*   **Simultaneous vs. Sequential Games:**
    *   **Simultaneous Games:** Players choose their strategies at the same time, without knowledge of what the other players are doing. Represented by payoff matrices. (e.g., Prisoner's Dilemma).
    *   **Sequential Games:** Players move in turns, and later players know the actions of earlier players. Represented by game trees.

*   **Perfect vs. Imperfect Information:**
    *   **Perfect Information:** Players know all previous moves made by all other players when making their decision. (e.g., Chess).
    *   **Imperfect Information:** Players do not know all previous moves when making their decision. (e.g., Poker, where you don't know your opponents' cards).

*   **Zero-Sum vs. Non-Zero-Sum Games:**
    *   **Zero-Sum Games:** The total gains and losses of all players sum to zero. One player's gain is another player's loss.
    *   **Non-Zero-Sum Games:** The total gains and losses do not necessarily sum to zero. Players can all benefit or all lose. Most real-world scenarios are non-zero-sum.

**Examples:**

*   **Simultaneous, Non-Cooperative, Non-Zero-Sum:** Prisoner's Dilemma, Cournot Duopoly.
*   **Sequential, Non-Cooperative, Non-Zero-Sum:** Entry deterrence game, Ultimatum Game.
*   **Zero-Sum Game:** Rock-Paper-Scissors (simplified).

---

### Practice Questions & Exercises:

1.  **Define Game Theory in your own words.**
2.  **List the three core components of any game.**
3.  **What does it mean for a player to be "rational" in game theory?**
4.  **Consider the following payoff matrix for a game between Player A and Player B. Strategies are Up (U) and Down (D) for Player A, and Left (L) and Right (R) for Player B. Payoffs are (A, B).**

    |       | L     | R     |
    | :---- | :---- | :---- |
    | **U** | (3, 1) | (0, 0) |
    | **D** | (0, 0) | (1, 3) |

    a)  Is this a simultaneous or sequential game?
    b)  Is this a zero-sum or non-zero-sum game?
    c)  What is Player A's best response if Player B chooses L?
    d)  What is Player A's best response if Player B chooses R?
    e)  What is Player B's best response if Player A chooses U?
    f)  What is Player B's best response if Player A chooses D?
    g)  Identify any Nash Equilibria in this game.
    h)  Does this game have a competitive equilibrium? If so, what is it?

5.  **Explain why the outcome (Silent, Silent) in the Prisoner's Dilemma is Pareto efficient but not a Nash Equilibrium.**

---

### Answers to Practice Questions:

1.  Game Theory is the study of strategic interactions among rational decision-makers, where the outcome for each participant depends on the choices of others.
2.  The three core components are: Players, Strategies, and Payoffs.
3.  A rational player in game theory is assumed to act in their own self-interest, aiming to choose the strategy that maximizes their own payoff, given their beliefs about the actions of other players.
4.  **Payoff Matrix:**

    |       | L     | R     |
    | :---- | :---- | :---- |
    | **U** | (3, 1) | (0, 0) |
    | **D** | (0, 0) | (1, 3) |

    a)  **Simultaneous:** Players choose their strategies without knowing the other's choice.
    b)  **Non-Zero-Sum:** The sum of payoffs for (U, L) is 3+1=4, for (U, R) is 0+0=0, for (D, L) is 0+0=0, and for (D, R) is 1+3=4. The sums are not always zero.
    c)  If Player B chooses L, Player A's payoffs are 3 (for U) and 0 (for D). Player A's best response is **U**.
    d)  If Player B chooses R, Player A's payoffs are 0 (for U) and 1 (for D). Player A's best response is **D**.
    e)  If Player A chooses U, Player B's payoffs are 1 (for L) and 0 (for R). Player B's best response is **L**.
    f)  If Player A chooses D, Player B's payoffs are 0 (for L) and 3 (for R). Player B's best response is **R**.
    g)  A Nash Equilibrium occurs when each player's strategy is a best response to the other's.
        *   (U, L): Is U a best response to L? Yes (3 > 0). Is L a best response to U? Yes (1 > 0). So, **(U, L) is a Nash Equilibrium.**
        *   (D, R): Is D a best response to R? Yes (1 > 0). Is R a best response to D? Yes (3 > 0). So, **(D, R) is a Nash Equilibrium.**
    h)  Yes, this game has competitive equilibria. The Nash Equilibria found in (g) are the competitive equilibria of this game.

5.  **Pareto Efficiency vs. Nash Equilibrium:**
    *   **(Silent, Silent) is Pareto Efficient:** Because there is no other outcome where at least one player is better off and no player is worse off. Moving from (Silent, Silent) to (Confess, Silent) makes Alice better off (0 vs -1) but Bob worse off (-10 vs -1). Moving to (Silent, Confess) makes Bob better off (0 vs -1) and Alice worse off (-10 vs -1). Moving to (Confess, Confess) makes both worse off (-5 vs -1).
    *   **(Silent, Silent) is NOT a Nash Equilibrium:** If Alice expects Bob to stay silent, her best response is to confess (0 years vs -1 year). Similarly, if Bob expects Alice to stay silent, his best response is to confess (0 years vs -1 year). Therefore, in the (Silent, Silent) state, both players have an incentive to unilaterally deviate, meaning it's not a stable competitive equilibrium.

---

### Important Points to Remember:

*   Game theory is about **strategic interdependence**.
*   **Rationality** is a core assumption, meaning players act to maximize their own utility.
*   A **competitive equilibrium** is a stable state where no player wants to change their strategy alone.
*   **Nash Equilibrium** is a primary concept of competitive equilibrium in non-cooperative games.
*   The Nash Equilibrium is not always the **socially optimal** outcome.
*   Understanding the **type of game** (simultaneous, sequential, etc.) is crucial for analysis.
