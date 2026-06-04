---
title: "Imperfect information extensive form games (IIEFG) - strategies in IIEFGs"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 2: Correlated equilibrium (CE) "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5be"
status: "completed"
scrapedAt: "2026-05-20T17:06:35.466Z"
---
# GAME THEORY AND MECHANISM DESIGN - Module 2: Correlated Equilibrium (CE)

## Topic: Imperfect Information Extensive Form Games (IIEFG) - Strategies in IIEFGs

---

### 1. Introduction to Imperfect Information Extensive Form Games (IIEFG)

**What are IIEFGs?**

*   **Extensive Form Games:** Games played sequentially over time, where players make decisions at different points, and the sequence of moves matters.
*   **Imperfect Information:** A player does not know the complete history of the game when making a decision. Specifically, they may not know which move their opponent(s) made at previous decision points.
*   **Information Sets:** A collection of decision nodes for a single player such that the player cannot distinguish between these nodes. This means that if a player is at any node within an information set, they must have the same set of available actions and receive the same payoffs *conditional on reaching that information set* (though the specific payoffs may differ depending on the actual node).

**Key Components of an IIEFG:**

*   **Players:** The decision-makers in the game.
*   **Terminal Nodes:** Points in the game tree where the game ends and payoffs are realized.
*   **Chance Nodes:** Points where a random event determines the next state of the game (e.g., drawing a card).
*   **Decision Nodes:** Points where a specific player makes a choice.
*   **Information Sets:** Groupings of decision nodes for a single player.
*   **Actions/Moves:** The choices available to players at their decision nodes.
*   **Payoffs:** The utility or outcome for each player at the terminal nodes.
*   **Beliefs:** For each information set, a player has beliefs about the probability that the game is at any particular node within that information set.

---

### 2. Learning Outcome 1: Define and explain the concept of an information set.

**Definition of an Information Set:**

An information set for a player $i$ at a decision node $h$ is the set of all decision nodes $h'$ for player $i$ such that:

1.  **Player Identity:** Player $i$ is the player whose turn it is to move at both $h$ and $h'$.
2.  **History of Moves (from the perspective of the player):** The sequence of moves made by *other* players prior to reaching $h$ is indistinguishable from the sequence of moves made by *other* players prior to reaching $h'$.
3.  **Availability of Actions:** The set of available actions for player $i$ at $h$ is the same as the set of available actions at $h'$.

**Purpose of Information Sets:**

*   **Capturing Imperfect Information:** They are the formal mechanism in game theory to represent a player's lack of knowledge about the exact state of the game.
*   **Defining Player Rationality:** A player's strategy is a complete plan of action, specifying a choice for *every* information set they might face, not just for individual nodes.

**Example:**

Consider a simple game of "Guess the Coin Flip."

*   Player 1 flips a fair coin, but hides the outcome.
*   Player 2 observes nothing.
*   Player 1 can then choose to say "Heads" or "Tails."
*   Player 2, without knowing the coin's outcome or what Player 1 said, chooses to bet "Heads" or "Tails."

*Initial thought:* Player 1 has two decision nodes: one if the coin is Heads, one if it's Tails. Player 2 has four decision nodes: (Player 1 says Heads, Coin is Heads), (Player 1 says Heads, Coin is Tails), (Player 1 says Tails, Coin is Heads), (Player 1 says Tails, Coin is Tails).

*With Imperfect Information:*

*   **Player 1's Decision Nodes:**
    *   Node 1: Coin is Heads. Action: Say "Heads" or "Tails."
    *   Node 2: Coin is Tails. Action: Say "Heads" or "Tails."
    *   These two nodes are in *separate* information sets because Player 1 *knows* the outcome of the coin flip before deciding what to say.

*   **Player 2's Decision Nodes:**
    *   Node 3: Coin is Heads, Player 1 says "Heads." Action: Bet "Heads" or "Tails."
    *   Node 4: Coin is Heads, Player 1 says "Tails." Action: Bet "Heads" or "Tails."
    *   Node 5: Coin is Tails, Player 1 says "Heads." Action: Bet "Heads" or "Tails."
    *   Node 6: Coin is Tails, Player 1 says "Tails." Action: Bet "Heads" or "Tails."

    Now, consider Player 2's perspective *after* Player 1 has spoken. Let's assume Player 1 always says the true outcome of the coin.
    *   If Player 1 says "Heads" (meaning the coin is Heads), Player 2 faces a node where Player 1 said "Heads".
    *   If Player 1 says "Tails" (meaning the coin is Tails), Player 2 faces a node where Player 1 said "Tails".

    Let's refine the example to highlight the information set better.

**Revised Example: Modified "Guess the Coin Flip"**

1.  Player 1 flips a coin.
2.  Player 1 knows the outcome. Player 1 can choose to *state* the outcome truthfully or *lie*.
3.  Player 2 *does not* know the outcome of the coin flip, and *does not* hear what Player 1 says. Player 2 simply decides to bet "Heads" or "Tails."
4.  Payoffs: If Player 2's bet matches the coin outcome, Player 2 gets +1, Player 1 gets 0. If Player 2's bet does not match, Player 2 gets -1, Player 1 gets +1.

*   **Player 1's Decision Nodes:**
    *   Node 1: Coin is Heads. Action: State "Heads" or "Tails".
    *   Node 2: Coin is Tails. Action: State "Heads" or "Tails".
    *   Player 1 knows which node they are at, so these are in separate information sets.

*   **Player 2's Decision Nodes:**
    *   The game structure is: Player 1 moves -> Player 2 moves.
    *   Crucially, Player 2 does not observe Player 1's statement. Player 2 makes their decision without any information about what Player 1 did or what the coin outcome is.
    *   Therefore, all of Player 2's potential decision points fall into a *single information set*. Let's denote this as $I_2$.
    *   If Player 2 had observed Player 1's statement, they would have multiple information sets.

**Important Property:** All nodes within a single information set for a player must have the same available actions.

---

### 3. Learning Outcome 2: Define a strategy in an imperfect information extensive form game.

**Definition of a Strategy:**

A strategy for player $i$ is a complete plan of action that specifies a *probability distribution over actions* for player $i$ at *each of their information sets*.

*   **Complete Plan:** It covers all possible situations the player might encounter, even those that might not be reached if the player follows certain parts of their strategy.
*   **Information Set Specific:** The strategy is defined for each information set, not for each individual node. This reflects the player's inability to distinguish between nodes within an information set.

**Notation:**

*   Let $H_i$ be the set of information sets for player $i$.
*   For each information set $I \in H_i$, let $A(I)$ be the set of available actions for player $i$ at any node in $I$.
*   A strategy $s_i$ for player $i$ is a collection of probability distributions $\{ \sigma_I \}_{I \in H_i}$, where $\sigma_I$ is a probability distribution over $A(I)$.
    *   $\sigma_I(a) \ge 0$ for all $a \in A(I)$, and $\sum_{a \in A(I)} \sigma_I(a) = 1$.

**Pure vs. Mixed Strategies:**

*   **Pure Strategy:** At each information set, the player chooses a single action with probability 1. (i.e., $\sigma_I(a) = 1$ for some $a \in A(I)$, and 0 for all other actions).
*   **Mixed Strategy:** At one or more information sets, the player randomizes over their available actions.

**Example (Continuing the "Guess the Coin Flip" example):**

Let's assume Player 1 truthfully states the outcome.
*   Player 1:
    *   Information Set $I_1^H$: Coin is Heads. Actions: $\{StateH, StateT\}$.
    *   Information Set $I_1^T$: Coin is Tails. Actions: $\{StateH, StateT\}$.
    *   Player 1's strategy $s_1$:
        *   For $I_1^H$: $\sigma_{I_1^H}(StateH) = 1$, $\sigma_{I_1^H}(StateT) = 0$ (Player 1 truthfully states "Heads").
        *   For $I_1^T$: $\sigma_{I_1^T}(StateT) = 1$, $\sigma_{I_1^T}(StateH) = 0$ (Player 1 truthfully states "Tails").

*   Player 2:
    *   Information Set $I_2$: Player 2 has no information. Actions: $\{BetH, BetT\}$.
    *   Player 2's strategy $s_2$:
        *   For $I_2$: $\sigma_{I_2}(BetH) = p$, $\sigma_{I_2}(BetT) = 1-p$, where $0 \le p \le 1$.
        *   This means Player 2 bets Heads with probability $p$ and Tails with probability $1-p$.

**Key Point:** A strategy must specify an action (or a probability distribution over actions) for *every* information set of that player.

---

### 4. Learning Outcome 3: Understand beliefs and their role in player decision-making.

**What are Beliefs?**

Beliefs are a player's subjective probability assessments over the nodes within their information sets.

*   For an information set $I$ of player $i$, a belief $\mu_I$ is a probability distribution over the nodes $h' \in I$.
*   $\mu_I(h') \ge 0$ for all $h' \in I$, and $\sum_{h' \in I} \mu_I(h') = 1$.

**How are Beliefs Formed?**

Beliefs are crucial for players to make decisions at information sets where they don't know which node they are at. They are formed based on:

1.  **Prior Beliefs:** Beliefs about the initial state of the game (e.g., probability of coin being heads).
2.  **Strategies of Other Players:** Players update their beliefs based on the observed actions of other players, using Bayes' Rule whenever possible.
3.  **The Game Structure:** The rules of the game themselves.

**Bayesian Updating (When Applicable):**

If a player $i$ is at an information set $I$, and they observe a sequence of moves by other players ($m_{-i}$) that leads to $I$, they can update their beliefs about the nodes within $I$ using Bayes' Rule.

Let $h$ be a node in $I$. Let $P(h)$ be the prior probability of reaching node $h$, and $P(m_{-i} | h)$ be the probability of observing the sequence of opponent moves $m_{-i}$ given that the game is at node $h$.

The posterior probability of being at node $h$, given the observed moves $m_{-i}$, is:

$\mu_I(h | m_{-i}) = \frac{P(h) \cdot P(m_{-i} | h)}{\sum_{h' \in I} P(h') \cdot P(m_{-i} | h')}$

**Challenges with Beliefs in IIEFGs:**

*   **"And" Condition (Perfect Bayesian Equilibrium):** A key concept in IIEFGs is that players' strategies should be optimal given their beliefs, and beliefs should be consistent with strategies and be formed using Bayes' rule whenever possible.
*   **"And" Condition Violation:** What happens if a player's strategy leads to an information set that has zero probability of being reached under that strategy (and the strategies of others)? In such cases, Bayes' Rule cannot be applied directly because the denominator is zero. This is known as a *non-consequential path*.
    *   For these off-equilibrium path information sets, beliefs can be specified arbitrarily, but they still need to satisfy certain consistency conditions.

**Role in Decision Making:**

A player $i$ at information set $I$ will choose an action $a \in A(I)$ that maximizes their expected utility, calculated using their beliefs $\mu_I$ over the nodes in $I$ and their own strategy for future decisions:

$U_i(a | I, s_{-i}, \mu_I) = \sum_{h' \in I} \mu_I(h') \cdot U_i(a, h', s_{-i})$

Where $U_i(a, h', s_{-i})$ is the expected utility for player $i$ if they choose action $a$ at information set $I$, given that the game is at node $h'$ and other players follow strategies $s_{-i}$.

**Example (Continuing the "Guess the Coin Flip" example):**

*   Player 1's Strategy: Always state the truth. $s_1 = (StateH \text{ if Heads}, StateT \text{ if Tails})$.
*   Player 2's Strategy: Bet Heads with probability $p$. $s_2 = \{BetH \text{ w.p. } p, BetT \text{ w.p. } 1-p\}$ for information set $I_2$.

Let's analyze Player 2's decision at $I_2$. Player 2 doesn't know the coin outcome. Player 2 has a single information set $I_2$.
*   What are Player 2's beliefs about being at a node where Player 1 truthfully said "Heads" vs. "Tails"?
    *   Prior: Coin is Heads w.p. 0.5, Coin is Tails w.p. 0.5.
    *   Player 1's strategy is to state the truth. So, if the coin is Heads, Player 1 says "Heads". If the coin is Tails, Player 1 says "Tails".
    *   Player 2 does *not* observe Player 1's statement. So, Player 2 cannot use Bayes' Rule to update beliefs about the coin outcome *after* Player 1 has spoken, because Player 2 doesn't observe Player 1's action.
    *   Therefore, Player 2's beliefs about the coin outcome remain the prior beliefs:
        *   $\mu_{I_2}(\text{Coin is Heads}) = 0.5$
        *   $\mu_{I_2}(\text{Coin is Tails}) = 0.5$

Now, Player 2 chooses between BetH and BetT to maximize expected payoff:

*   **Expected Payoff for BetH:**
    *   If Coin is Heads (prob 0.5): Player 2 bets Heads, matches. Payoff = +1.
    *   If Coin is Tails (prob 0.5): Player 2 bets Heads, doesn't match. Payoff = -1.
    *   $E[U_2(BetH)] = 0.5 \cdot (+1) + 0.5 \cdot (-1) = 0$.

*   **Expected Payoff for BetT:**
    *   If Coin is Heads (prob 0.5): Player 2 bets Tails, doesn't match. Payoff = -1.
    *   If Coin is Tails (prob 0.5): Player 2 bets Tails, matches. Payoff = +1.
    *   $E[U_2(BetT)] = 0.5 \cdot (-1) + 0.5 \cdot (+1) = 0$.

In this specific version of the game, Player 2 is indifferent between betting Heads or Tails. Any $p$ between 0 and 1 can be part of a Nash Equilibrium. For example, if Player 2 bets Heads with probability 0.5 ($p=0.5$), Player 1 also has no incentive to deviate from stating the truth, as their expected payoff is 0 regardless.

**Crucial Insight:** Beliefs link the player's knowledge (or lack thereof) to their decision-making process.

---

### 5. Learning Outcome 4: Define sequential equilibrium (SE) and sequential rationality.

**Sequential Rationality:**

A player's strategy is sequentially rational if, at every information set, the player chooses an action that maximizes their expected utility, given their beliefs at that information set and the strategies of the other players.

*   This is a refinement of Nash Equilibrium for extensive form games.
*   It requires that strategies are optimal not just for the entire game, but also at every possible stage of the game, conditional on the player's information.

**Sequential Equilibrium (SE):**

A strategy profile $s = (s_1, \dots, s_n)$ and a system of beliefs $\mu = (\mu_1, \dots, \mu_n)$, where $\mu_i$ assigns a probability distribution to each information set of player $i$, constitutes a Sequential Equilibrium if it satisfies two conditions:

1.  **Sequential Rationality:** For every player $i$ and every information set $I$ of player $i$, the strategy $s_i$ specifies an action (or mixture of actions) that maximizes player $i$'s expected utility, given their beliefs $\mu_I$ at $I$ and the strategies $s_{-i}$ of the other players.
    *   $E[U_i(s_i, s_{-i} | I, \mu_I)] \ge E[U_i(s'_i, s_{-i} | I, \mu_I)]$ for all alternative strategies $s'_i$ for player $i$.

2.  **Belief Consistency:** The system of beliefs $\mu$ is derived from the strategy profile $s$ using Bayes' Rule whenever possible.
    *   For any information set $I$ that is reached with positive probability under $s$, the belief $\mu_I$ must be the conditional probability of the nodes in $I$ given the history that leads to $I$. If $h$ is a node in $I$, and $m_{-i}$ is the sequence of moves by other players that leads to $I$, then $\mu_I(h) = P(h | m_{-i}, s)$.
    *   For information sets $I$ that are reached with zero probability under $s$ (off-equilibrium path), beliefs $\mu_I$ can be specified arbitrarily but must still satisfy some consistency. The precise definition of belief consistency for off-equilibrium paths is where different refinements of SE arise (e.g., Perfect Bayesian Equilibrium uses a specific approach).

**Important Note on SE Definitions:**

There are a few related solution concepts:

*   **Perfect Bayesian Equilibrium (PBE):** A widely used refinement. It requires sequential rationality and that beliefs are formed by Bayes' Rule on paths of positive probability. For off-equilibrium paths, beliefs can be arbitrary, but there are often implicit assumptions or further conditions imposed.
*   **Sequential Equilibrium (SE - Kreps & Wilson):** This is a more general concept that also incorporates *trembling hand* considerations, meaning players might make small errors. This ensures that all information sets are reached with positive probability, allowing Bayes' Rule to be applied everywhere. The beliefs are then consistent with the strategies of these "trembling" players.

For this module's context on correlated equilibrium, understanding the basic idea of sequential rationality and belief consistency is most important. We will focus on the core idea that strategies must be optimal at every information set given beliefs.

**Key Aspects of Sequential Rationality:**

*   **No "Bad Bets" for the Future:** A player should not stick to a suboptimal choice at an early information set, even if it sets up a good situation later, if that early choice is not optimal given their current beliefs.
*   **Forward-Looking:** Players anticipate future moves and their consequences when making current decisions.

**Example (Centipede Game - Simplified):**

*   Player 1 can "Take" ($T$) or "Pass" ($P$).
*   If P1 Takes, payoffs are (1, 0).
*   If P1 Passes, Player 2 can "Take" ($T$) or "Pass" ($P$).
*   If P2 Takes, payoffs are (0, 2).
*   If P2 Passes, payoffs are (3, 1).

*   **Game Tree:**
    *   P1 (Node 1): Actions $\{T, P\}$
    *   If P1 chooses P: P2 (Node 2): Actions $\{T, P\}$
    *   Terminal nodes: (1,0) from P1-T, (0,2) from P2-T, (3,1) from P2-P.

*   **Perfect Information:** Both players know all previous moves.

*   **Backward Induction for Subgame Perfect Nash Equilibrium (SPNE) - a type of SE for perfect information games:**
    *   Consider Player 2 at Node 2. P2 knows they are at Node 2.
        *   If P2 Takes: Payoff is 2.
        *   If P2 Passes: Payoff is 1.
        *   Player 2's sequentially rational choice is to Take (2 > 1).

    *   Now consider Player 1 at Node 1. P1 knows that if they Pass, P2 will Take, leading to payoffs (0, 2). P1 can also choose to Take immediately, leading to payoffs (1, 0).
        *   If P1 Takes: Payoff is 1.
        *   If P1 Passes (and P2 then Takes): Payoff is 0.
        *   Player 1's sequentially rational choice is to Take (1 > 0).

*   **SPNE Strategy:** (P1: Take; P2: Take if P1 Passes)
*   **SPNE Outcome:** (1, 0)

**Imperfect Information Scenario (Illustrative):**

Imagine Player 1 flips a coin. If Heads, Player 1 makes the first move (as above). If Tails, Player 2 makes the first move (with a similar but reversed structure). Player 2 does not know the coin outcome.

*   Player 2 now has an information set where they don't know if it's their turn to move after Player 1 passed (as in the perfect info case) or if they are making the first move in the "Tails" branch. This is where beliefs become critical.

---

### 6. Learning Outcome 5: Understand how strategies in IIEFGs relate to Correlated Equilibrium (CE).

**Correlated Equilibrium (CE):**

*   **Definition:** A correlated equilibrium is a probability distribution over *strategy profiles* (or equivalently, over outcomes) such that if a mediator (or "correlation device") randomly selects a strategy profile $s = (s_1, \dots, s_n)$ according to this distribution and privately recommends each player $i$ to play their component $s_i$, then no player has an incentive to unilaterally deviate from the recommendation, assuming all other players follow their recommendations.

*   **Key Feature:** CE allows for coordination among players based on shared information or signals generated by a third party (the correlation device).

**Relationship between CE and IIEFGs:**

1.  **IIEFGs as the "Stage":** Imperfect information extensive form games provide the framework in which CE can be analyzed. Players make sequential decisions with potential lack of knowledge.
2.  **CE as a Solution Concept:** CE is a solution concept that can be applied to IIEFGs. It identifies stable distributions of outcomes that can be achieved through coordinated play, potentially using a correlation device.
3.  **The Role of the Correlation Device:**
    *   In an IIEFG, a correlation device can generate signals that players use to guide their actions. These signals can help players coordinate their moves and resolve uncertainty.
    *   The "recommendation" from the device acts like a private signal that each player receives.
    *   The information sets of the players still play a crucial role. A player's strategy must specify how they will act at each of their information sets, given the recommendation they receive from the device.
4.  **Incentive Compatibility:** The core of CE is incentive compatibility. For a CE distribution in an IIEFG:
    *   If player $i$ receives a recommendation $s_i$ for information set $I$, and the device's distribution implies a certain belief about the state of the game when $I$ is reached, player $i$ should not want to deviate.
    *   The crucial aspect is how the correlation device's signal interacts with the player's information sets.

**How a Correlation Device Might Work in an IIEFG:**

Imagine a simple IIEFG where Player 1 has an information set $I_1$ and Player 2 has an information set $I_2$.
A correlation device could:
*   Randomly pick a strategy profile $(s_1^*, s_2^*)$.
*   Private signal to Player 1: $s_1^*$.
*   Private signal to Player 2: $s_2^*$.
*   Player 1's strategy must specify for each of their information sets, how they play given the received $s_1^*$.
*   Player 2's strategy must specify for each of their information sets, how they play given the received $s_2^*$.

However, the typical way CE is applied is that the device samples from a distribution of *actions* at certain points in the game, or signals that influence beliefs.

**Example: "Cheap Talk" in an IIEFG Setting**

Consider a game where:
*   Player 1 has private information (e.g., knows the state of the world: High or Low).
*   Player 1 can send a public message (cheap talk).
*   Player 2 observes the message and then takes an action.
*   The outcomes depend on the state and Player 2's action.

A CE might involve:
*   Player 1 sending a specific message (e.g., "I see High") when the state is High.
*   Player 1 sending a different message (e.g., "I see Low") when the state is Low.
*   Player 2 using these messages to update their beliefs about the state.
*   Player 2 taking an action that is optimal given their updated beliefs and the received message.

If Player 1's recommendation from a CE distribution is to say "I see High" when the state is High, and Player 2's recommendation is to take action $A$ when they hear "I see High", then:
*   Player 1 should not want to say "I see Low" instead of "I see High" (given their private info and the overall CE distribution).
*   Player 2 should not want to take action $B$ instead of $A$ (given the message and the overall CE distribution).

**Important Distinction:**
*   **Nash Equilibrium in IIEFGs:** Players choose strategies that are best responses to the *equilibrium strategies* of others, without any external coordination.
*   **Correlated Equilibrium in IIEFGs:** Players coordinate their strategies through a shared signal from a correlation device. This can lead to outcomes that are not Nash Equilibria but are still stable and incentive-compatible. CE is a broader concept than Nash Equilibrium.

**Connection to Module 2's Broader Theme:**

This topic bridges the understanding of sequential decision-making under uncertainty (IIEFGs) with a broader concept of stable outcomes (CE). While CE is often introduced in normal-form games, its principles extend to sequential games by considering how coordinated signals can influence players' beliefs and strategies at their respective information sets. The challenge is in ensuring that the recommendations from the CE device are incentive-compatible at each relevant information set.

---

### 7. Practice Questions and Exercises

**Question 1:**

Consider the following simplified IIEFG:

*   Player 1 receives a signal: High (H) with probability 0.5, Low (L) with probability 0.5. Player 1 knows their signal.
*   Player 1 can choose to Send Message M1 or M2.
*   Player 2 does not know the signal Player 1 received. Player 2 receives the message from Player 1.
*   Player 2 can choose Action A or Action B.

| Signal | Player 1's Message | Player 2's Action | Payoffs (P1, P2) |
| :----- | :----------------- | :---------------- | :--------------- |
| H      | M1                 | A                 | (3, 1)           |
| H      | M1                 | B                 | (0, 0)           |
| H      | M2                 | A                 | (0, 0)           |
| H      | M2                 | B                 | (1, 3)           |
| L      | M1                 | A                 | (1, 3)           |
| L      | M1                 | B                 | (0, 0)           |
| L      | M2                 | A                 | (0, 0)           |
| L      | M2                 | B                 | (3, 1)           |

*   **Part a:** Identify Player 1's information sets and Player 2's information sets.
*   **Part b:** Define a strategy for Player 1.
*   **Part c:** What are Player 2's beliefs about Player 1's signal when Player 2 receives message M1? Explain how these beliefs are formed.
*   **Part d:** Is there a Nash Equilibrium where Player 1 always sends M1, and Player 2 always plays A? If so, explain why. If not, explain why not.

**Question 2:**

In an IIEFG, what is the fundamental difference between a strategy in a perfect information game and a strategy in an imperfect information game?

**Question 3:**

Explain the concept of "sequential rationality" and why it is important for solving IIEFGs.

---

### 8. Answers to Practice Questions

**Answer 1:**

*   **Part a:**
    *   Player 1's Information Sets: Player 1 knows their signal. So, there are two information sets: $I_{1,H}$ (when Player 1's signal is High) and $I_{1,L}$ (when Player 1's signal is Low).
    *   Player 2's Information Sets: Player 2 does not know the signal Player 1 received, but they *do* observe Player 1's message. Thus, Player 2 has two information sets: $I_{2,M1}$ (when Player 2 receives message M1) and $I_{2,M2}$ (when Player 2 receives message M2).

*   **Part b:**
    A strategy for Player 1 must specify an action (M1 or M2) for each of their information sets:
    *   For $I_{1,H}$: Player 1 chooses between sending M1 or M2.
    *   For $I_{1,L}$: Player 1 chooses between sending M1 or M2.
    Example strategy: Player 1 sends M1 if signal is H, and M2 if signal is L.

*   **Part c:**
    Player 2's beliefs when receiving message M1:
    *   **Prior Beliefs:** $P(\text{Signal=H}) = 0.5$, $P(\text{Signal=L}) = 0.5$.
    *   **Player 1's Strategy (Let's assume a strategy for now):** If Player 1 plays: (M1 if H, M1 if L).
    *   **Player 2's Observation:** Player 2 hears M1.
    *   **Applying Bayes' Rule:**
        *   $P(\text{Signal=H | M1}) = \frac{P(\text{M1 | Signal=H}) \cdot P(\text{Signal=H})}{P(\text{M1})}$
        *   $P(\text{M1}) = P(\text{M1 | Signal=H}) \cdot P(\text{Signal=H}) + P(\text{M1 | Signal=L}) \cdot P(\text{Signal=L})$
        *   $P(\text{M1}) = (1 \cdot 0.5) + (1 \cdot 0.5) = 1$.
        *   $P(\text{Signal=H | M1}) = \frac{1 \cdot 0.5}{1} = 0.5$.
        *   $P(\text{Signal=L | M1}) = \frac{P(\text{M1 | Signal=L}) \cdot P(\text{Signal=L})}{P(\text{M1})} = \frac{1 \cdot 0.5}{1} = 0.5$.
    *   So, Player 2 believes there is a 0.5 probability that Player 1's signal was High, and a 0.5 probability that it was Low.

    *   **Let's consider another strategy for Player 1:** (M1 if H, M2 if L).
    *   **Player 2's Observation:** Player 2 hears M1.
    *   **Applying Bayes' Rule:**
        *   $P(\text{M1}) = P(\text{M1 | Signal=H}) \cdot P(\text{Signal=H}) + P(\text{M1 | Signal=L}) \cdot P(\text{Signal=L})$
        *   $P(\text{M1}) = (1 \cdot 0.5) + (0 \cdot 0.5) = 0.5$.
        *   $P(\text{Signal=H | M1}) = \frac{P(\text{M1 | Signal=H}) \cdot P(\text{Signal=H})}{P(\text{M1})} = \frac{1 \cdot 0.5}{0.5} = 1$.
        *   $P(\text{Signal=L | M1}) = \frac{P(\text{M1 | Signal=L}) \cdot P(\text{Signal=L})}{P(\text{M1})} = \frac{0 \cdot 0.5}{0.5} = 0$.
    *   In this case, if Player 1 plays (M1 if H, M2 if L), and Player 2 hears M1, Player 2 knows with certainty that Player 1's signal was High.

*   **Part d:**
    Let's test the strategy profile:
    *   Player 1: (M1 if H, M1 if L) (Always sends M1)
    *   Player 2: (Play A for M1, Play A for M2) (Always plays A)

    *   **Check Player 2's rationality:**
        *   If Player 2 receives M1: Beliefs are P(H|M1)=0.5, P(L|M1)=0.5 (as calculated above).
            *   $E[U_2(\text{Play A} | M1)] = 0.5 \cdot 1 + 0.5 \cdot 3 = 2$.
            *   $E[U_2(\text{Play B} | M1)] = 0.5 \cdot 0 + 0.5 \cdot 1 = 0.5$.
            *   Playing A is optimal for Player 2 when receiving M1 (2 > 0.5).
        *   If Player 2 receives M2: Beliefs are P(H|M2)=0.5, P(L|M2)=0.5 (assuming P1's strategy is M1 if H, M1 if L, then M2 is never sent, so beliefs for M2 are undefined or arbitrary for pure NE, but for robustness let's assume an arbitrary consistent belief where they would break ties).
            *   Let's re-evaluate Player 1's strategy. If Player 1 plays M1 always.
            *   Player 2: If M1 occurs (prob 1), P2 plays A. If M2 occurs (prob 0), P2's action doesn't matter for outcome *if* P1 always plays M1.
            *   Let's assume P1: (M1 if H, M2 if L). P2: (A if M1, B if M2).
                *   P1: If H, sends M1. P2 hears M1. P2 believes P1=H w.p. 1. $E[U_2(A|M1)]=3$, $E[U_2(B|M1)]=0$. P2 plays A. Outcome (3,1).
                *   P1: If L, sends M2. P2 hears M2. P2 believes P1=L w.p. 1. $E[U_2(A|M2)]=0$, $E[U_2(B|M2)]=1$. P2 plays B. Outcome (1,3).
                *   This profile is (P1: M1 if H, M2 if L; P2: A if M1, B if M2).
                *   Check P1's incentive:
                    *   If H: P1 sends M1, gets 3. If P1 deviated to M2, P2 would play B, P1 gets 0. P1 doesn't deviate.
                    *   If L: P1 sends M2, gets 1. If P1 deviated to M1, P2 would play A, P1 gets 0. P1 doesn't deviate.
                *   This is a Nash Equilibrium.

    Let's re-examine the question's proposed strategy: P1 always M1, P2 always A.
    *   P1 Strategy: (M1 if H, M1 if L)
    *   P2 Strategy: (A if M1, A if M2)
    *   Outcome if H: P1 sends M1, P2 plays A. Payoff (3,1).
    *   Outcome if L: P1 sends M1, P2 plays A. Payoff (1,3).
    *   P2 beliefs for M1: P(H|M1)=0.5, P(L|M1)=0.5.
        *   $E[U_2(A|M1)] = 0.5 \cdot 1 + 0.5 \cdot 3 = 2$.
        *   $E[U_2(B|M1)] = 0.5 \cdot 0 + 0.5 \cdot 1 = 0.5$.
        *   P2 plays A, which is optimal for M1.
    *   P2 beliefs for M2: Since P1 never sends M2, P2's information set for M2 is off the equilibrium path. For P2 to play A (even though M2 is never sent), let's check if it's consistent. If P2 *hypothetically* received M2, and assumed P1 would play M1, then it's not a true NE.
    *   Let's test the proposed NE: P1 always M1, P2 always A.
        *   P1: If H, sends M1, gets 3. If P1 deviated to M2, P2 plays A, P1 gets 0. P1 doesn't deviate.
        *   P1: If L, sends M1, gets 1. If P1 deviated to M2, P2 plays A, P1 gets 0. P1 doesn't deviate.
        *   P2: On receiving M1 (which is always received), P2 plays A. Beliefs are P(H|M1)=0.5, P(L|M1)=0.5. As shown, playing A yields 2, playing B yields 0.5. P2 plays A.
    *   **Yes, this is a Nash Equilibrium.**

**Answer 2:**

The fundamental difference is the **structure of information sets**.
*   In **perfect information games**, each decision node for a player constitutes its own, singleton information set. This means the player knows exactly which node they are at when making a decision.
*   In **imperfect information games**, a player may have information sets containing multiple decision nodes. This means the player cannot distinguish between these nodes and must form beliefs about which node they are actually at. Consequently, a strategy in an IIEFG must specify an action for *every information set*, not just for every individual node.

**Answer 3:**

**Sequential Rationality** states that a player's strategy must be optimal (maximize expected utility) at *every one of their information sets*, given their beliefs at that information set and the strategies of the other players.

It is important for solving IIEFGs because:
1.  **Refines Equilibria:** It eliminates strategies that might be part of a Nash Equilibrium but involve irrational behavior at some point in the game. A player must always be making the best possible choice given the information they have at that moment.
2.  **Forward-Looking Behavior:** It captures the idea that players are forward-looking and consider the consequences of their current actions on future play, even when faced with uncertainty about the game's history.
3.  **Foundation for Solution Concepts:** Concepts like Sequential Equilibrium (SE) and Perfect Bayesian Equilibrium (PBE) build upon sequential rationality, adding conditions about belief consistency to ensure a robust solution.

---

### **Important Points to Remember:**

*   **Information Sets:** The key to understanding IIEFGs. They group nodes where a player's knowledge is identical.
*   **Strategy Completeness:** A strategy must define an action for *every* information set a player might face.
*   **Beliefs Link Knowledge to Action:** Players use beliefs to calculate expected utility at information sets where they lack perfect information.
*   **Sequential Rationality:** Actions must be optimal at every stage of the game, conditional on available information.
*   **CE in IIEFGs:** Correlated equilibria can exist in IIEFGs by leveraging correlation devices to signal actions or states, influencing players' beliefs and coordinating their sequential choices. The challenge is ensuring incentive compatibility at each information set.
