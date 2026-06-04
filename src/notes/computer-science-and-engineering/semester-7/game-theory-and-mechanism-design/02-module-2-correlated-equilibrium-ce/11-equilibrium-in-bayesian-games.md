---
title: "equilibrium in Bayesian games"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 2: Correlated equilibrium (CE) "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5c4"
status: "completed"
scrapedAt: "2026-05-20T17:06:39.605Z"
---
# Game Theory and Mechanism Design: Module 2 - Correlated Equilibrium (CE)

## Topic: Equilibrium in Bayesian Games

### 1. Introduction to Bayesian Games

**What are Bayesian Games?**

Bayesian games are a fundamental concept in game theory that extend the notion of strategic interaction to situations where players have **incomplete information** about each other. This means players do not know for sure the specific characteristics, preferences, or types of their opponents. Instead, they hold beliefs about these unknown aspects.

**Key Concepts:**

*   **Incomplete Information:** A situation where players are uncertain about the payoffs, actions, or states of nature that affect other players.
*   **Types:** Players are characterized by their "types," which represent their private information (e.g., their payoff function, their cost of production, their beliefs). A player's type is their private information and is not observable by other players.
*   **Beliefs:** Players form beliefs about the types of other players. These beliefs are probability distributions over the possible types of the opponents.
*   **Information Sets:** In games of perfect information, players know the history of play. In Bayesian games, players have imperfect information, meaning their actions are guided by their beliefs about the unobserved types of others. This is often modeled by information sets.
*   **Common Prior:** In many Bayesian games, it is assumed that there is a "common prior" over the distribution of types. This means all players agree on the initial probability distribution of the types in the game.

**Why are Bayesian Games Important?**

*   **Real-World Applicability:** Many real-world scenarios involve incomplete information, such as negotiations, auctions, political elections, and market competition.
*   **Foundation for Mechanism Design:** Understanding equilibrium in Bayesian games is crucial for designing mechanisms that elicit truthful behavior or achieve desired outcomes in the presence of private information.

### 2. Equilibrium Concepts in Bayesian Games

The core idea of equilibrium in Bayesian games is that players choose their actions to maximize their *expected* payoffs, given their beliefs about the types of other players.

#### 2.1. Bayesian Nash Equilibrium (BNE)

**Definition:**

A **Bayesian Nash Equilibrium (BNE)** is a profile of strategies, one for each player, such that each player's strategy maximizes their expected payoff, given their beliefs about the types of other players, and assuming all other players are also playing their BNE strategies.

**Key Characteristics of a BNE Strategy:**

*   A player's strategy specifies an action for every possible type they might be.
*   Each player's strategy is a best response to the strategies of the other players, considering the expected payoffs across all possible types of the opponents.

**How to Find a BNE:**

1.  **Define the Type Spaces:** Identify the possible types for each player.
2.  **Define the Prior Beliefs:** Specify the common prior distribution over the types of all players.
3.  **Formulate Expected Payoffs:** For each player, calculate the expected payoff of choosing a particular action, given their own type and their beliefs about the opponent's types.
4.  **Best Response:** For each player and for each of their possible types, determine the action that maximizes their expected payoff.
5.  **Equilibrium Condition:** A strategy profile is a BNE if, for every player and every one of their types, the chosen action is a best response to the strategies of the other players.

**Example: The Entry Game (Simplified)**

Consider a game where Player 1 (the Incumbent) can either Fight or Accommodate Player 2 (the Entrant). Player 2 can either Enter or Stay Out.

*   **Player 1's Type:** Player 1 can be "Tough" (T) or "Weak" (W). Player 1 knows their own type, but Player 2 does not.
*   **Player 2's Beliefs:** Player 2 believes Player 1 is Tough with probability `p` and Weak with probability `1-p`.
*   **Payoffs:**
    *   If Player 1 is Tough:
        *   Enter, Fight: (0, -1)
        *   Enter, Accommodate: (1, 1)
        *   Stay Out: (0, 0)
    *   If Player 1 is Weak:
        *   Enter, Fight: (1, -1)
        *   Enter, Accommodate: (2, 1)
        *   Stay Out: (0, 0)

**Player 2's Decision:**

Player 2 wants to maximize their expected payoff.

*   **Expected Payoff of Entering:**
    *   If Player 1 is Tough (prob `p`): Player 1 will Fight (assuming fighting is better for Toughness). Payoff for Player 2 is -1.
    *   If Player 1 is Weak (prob `1-p`): Player 1 will Fight (assuming fighting is better for Weakness to deter entry). Payoff for Player 2 is -1.
    *   *Correction:* Let's assume a rational Incumbent will choose the action that maximizes their own payoff given their type.

Let's re-evaluate Player 1's optimal strategy based on their type.

**Player 1's Decisions (Best Response to Player 2's potential actions):**

*   **If Player 1 is Tough:**
    *   If Player 2 Enters: Fight (0) vs. Accommodate (1). Player 1 will Accommodate.
    *   If Player 2 Stays Out: (0, 0)
*   **If Player 1 is Weak:**
    *   If Player 2 Enters: Fight (1) vs. Accommodate (2). Player 1 will Accommodate.
    *   If Player 2 Stays Out: (0, 0)

*This example is not ideal for illustrating BNE as players might not have distinct optimal strategies based on type.*

**Let's use a classic example: The Cournot Duopoly with Uncertainty**

*   Two firms compete in quantity.
*   Firm 1's marginal cost `c1` is known to Firm 1, but Firm 2 only knows `c1` is either `c_H` (high cost) with probability `p` or `c_L` (low cost) with probability `1-p`.
*   Firm 2's marginal cost `c2` is known to Firm 2, but Firm 1 only knows `c2` is either `c'_H` or `c'_L`. (For simplicity, let's assume Firm 2's cost is known to Firm 1, and Firm 1's cost is uncertain for Firm 2).

**Simplified Example: The "Chicken" Game with Incomplete Information**

Two drivers approach each other on a single lane. Each can Swerve or Drive Straight.

*   **Types:**
    *   Player 1 is either "Aggressive" (A) or "Normal" (N).
    *   Player 2 is either "Aggressive" (A) or "Normal" (N).
*   **Payoffs (Example):**
    *   (Swerve, Swerve): (0, 0) - Both avoid collision, no one loses face.
    *   (Swerve, Straight): (-1, 1) - Player who swerved loses face.
    *   (Straight, Swerve): (1, -1) - Player who swerved loses face.
    *   (Straight, Straight): (-10, -10) - Collision, very bad outcome.

*   **Incomplete Information:** Suppose Player 1 knows their own type, but Player 2 only knows that Player 1 is Aggressive with probability `p` and Normal with probability `1-p`.

**Player 2's Expected Payoff of Swerving:**

*   Player 2's payoff for swerving is always 0, regardless of Player 1's action.

**Player 2's Expected Payoff of Driving Straight:**

*   If Player 1 Swerves: Player 2 gets 1.
*   If Player 1 Drives Straight: Player 2 gets -10.

Player 2's decision depends on their belief about Player 1's action. This action, in turn, depends on Player 1's type and Player 1's beliefs about Player 2's type (if that were also uncertain).

Let's consider Player 1's strategy based on their type.

**Player 1's Strategy:**

*   **If Player 1 is Aggressive:**
    *   If Player 2 Swerves: Player 1 prefers Straight (1) over Swerve (0).
    *   If Player 2 Drives Straight: Player 1 prefers Swerve (-10) over Straight (very bad payoff).
*   **If Player 1 is Normal:**
    *   If Player 2 Swerves: Player 1 prefers Straight (1) over Swerve (0).
    *   If Player 2 Drives Straight: Player 1 prefers Swerve (-10) over Straight (very bad payoff).

**Player 2's Beliefs and Best Response:**

Suppose Player 2 believes Player 1 will Swerve if Player 1 is Normal (which might be a standard assumption) and Drive Straight if Player 1 is Aggressive. This is not a complete strategy specification.

A full BNE strategy for Player 1 would specify an action for *each* of Player 1's types.

**Example BNE Strategy:**

*   **Player 1:**
    *   If Aggressive, drive Straight.
    *   If Normal, Swerve.
*   **Player 2:**
    *   If Player 2 believes Player 1 will play this strategy:
        *   Expected payoff of Swerving: 0 (regardless of Player 1's type, Player 2's payoff is 0).
        *   Expected payoff of Driving Straight:
            *   If Player 1 is Aggressive (prob `p`), Player 1 drives Straight. Collision (-10).
            *   If Player 1 is Normal (prob `1-p`), Player 1 Swerves. Player 2 gets 1.
            *   Expected payoff of Driving
