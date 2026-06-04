---
title: "equivalence of strategies in IIEFGs"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 2: Correlated equilibrium (CE) "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5bf"
status: "completed"
scrapedAt: "2026-05-20T17:06:36.181Z"
---
# Module 2: Correlated Equilibrium (CE) - Equivalence of Strategies in Iterated Elimination of Induced ENEE Functions (IIEFGs)

## Introduction to IIEFGs and Strategy Equivalence

This module delves into the concept of **Correlated Equilibrium (CE)** within the framework of **Game Theory and Mechanism Design**. Specifically, we will focus on the equivalence of strategies in **Iterated Elimination of Induced ENEE Functions (IIEFGs)**. While the term "ENEE Functions" might be specific to a particular curriculum or text, we will interpret it in a generalizable way within the context of information and strategic decision-making in games. The core idea is to understand how different approaches to analyzing strategic interactions, particularly those involving sequential updates and information processing, can lead to equivalent strategic outcomes.

## 1. Understanding Iterated Elimination of Induced ENEE Functions (IIEFGs)

**Key Concept:** IIEFGs are a framework for analyzing games where players' strategies are iteratively refined based on updated beliefs about other players' strategies and the underlying game structure. The "Induced ENEE Functions" likely refer to functions that capture a player's expected utility given certain beliefs and the actions of others. The "iterated elimination" aspect suggests a process of removing non-credible or dominated strategies or beliefs over multiple rounds.

### 1.1. Core Components of IIEFGs

*   **Beliefs:** Players form beliefs about the strategies of other players and potentially about the state of the world.
*   **Utility Functions:** Players have well-defined utility functions that represent their preferences over outcomes.
*   **Information Updates:** In each iteration, players update their beliefs based on new information, which could be derived from observing previous actions or learning about the game's structure.
*   **Strategy Refinement:** Players adjust their strategies in response to updated beliefs, aiming to maximize their expected utility.
*   **Convergence:** The process ideally converges to a stable set of strategies or beliefs, representing a form of equilibrium.

### 1.2. The "Induced ENEE Function" (Interpreted)

Let's interpret "ENEE Function" as **Expected Normalized Expected Utility Function**. This would be a function that, for a given player, calculates their expected utility from a particular strategy, potentially normalized by some factor (e.g., by the expected utility of a default action or by the expected number of times a certain belief state is reached).

*   **Example:** Consider a player `i` with strategy `s_i`. The Induced ENEE Function for player `i` given beliefs `b_i` about other players' strategies `s_{-i}` would be:
    `E[U_i(s_i, s_{-i}) | b_i]`
    This function captures the expected utility of player `i` playing `s_i` when they believe other players will play according to `b_i`. The "normalized" aspect might imply scaling this utility to facilitate comparisons or updates.

### 1.3. The Iterative Process

The "iterated elimination" implies a recursive application of belief updating and strategy adjustment.

*   **Round 1:** Players form initial beliefs and choose initial strategies.
*   **Round 2:** Players observe outcomes (or lack thereof) from Round 1, update their beliefs, and refine their strategies.
*   **Subsequent Rounds:** This process continues until no further significant changes occur in beliefs or strategies.

## 2. Correlated Equilibrium (CE)

**Definition:** A **Correlated Equilibrium (CE)** is a probability distribution over the strategy profiles of a game such that if each player is recommended a strategy according to this distribution, and they follow the recommendation, then no player has an incentive to unilaterally deviate, *given their belief that the recommendation is part of this equilibrium distribution*.

### 2.1. Key Features of Correlated Equilibrium

*   **Information Aggregation:** CE allows for strategies to be correlated, meaning players can receive "signals" or recommendations that are correlated across players. This is a key differentiator from Nash Equilibrium, where strategies are independent conditional on the strategy profile.
*   **Conditional Deviations:** The incentive to deviate for a player is evaluated *conditional* on the recommendation they receive.
*   **Beliefs about Recommendations:** Players believe that the recommended strategies are drawn from the CE distribution.

### 2.2. CE as a Generalization of Nash Equilibrium

*   **Every Nash Equilibrium is a Correlated Equilibrium:** If players play a Nash Equilibrium, there's a distribution where each player is recommended their Nash strategy with probability 1. No player wants to deviate from their Nash strategy, so they won't deviate from a recommendation to play it.
*   **CE can achieve higher payoffs:** CE can exist in games where no Nash Equilibrium exists, or it can Pareto dominate all Nash Equilibria by allowing for coordinated strategies through correlated signals.

## 3. Equivalence of Strategies in IIEFGs and Correlated Equilibrium

This is the core of the topic. We are interested in when the outcome of the IIEFG process leads to a strategy profile that can be supported by a Correlated Equilibrium.

### 3.1. The Intuition: Shared Information and Coordinated Beliefs

The iterative nature of IIEFGs, where players update beliefs based on information, is conceptually similar to how players might interpret correlated signals in a CE. If the IIEFG process leads to players forming common beliefs about each other's intentions and the game's structure, these shared beliefs can be represented by a correlated distribution.

### 3.2. Connecting IIEFGs to Correlated Equilibrium

The equivalence often arises when the "Induced ENEE Functions" and the iterative updates in IIEFGs effectively capture the "no incentive to deviate" condition of CE.

*   **Beliefs in IIEFGs as Correlated Signals:** The evolving beliefs in an IIEFG can be thought of as a form of correlated signal. If player A believes player B will play strategy `s_B` with a certain probability, and this belief is formed through an iterative process of information processing, it's akin to player A receiving a signal that influences their own strategy choice.
*   **Rationality and Common Knowledge:** Both IIEFGs and CE rely on players being rational and having some level of common knowledge about the game and each other's rationality.

### 3.3. Formalizing the Equivalence (Conceptual)

While a formal proof would depend heavily on the precise definition of "Induced ENEE Functions" and the IIEFG updating rules, the general idea is:

*   If the IIEFG process converges to a strategy profile `(s_1*, ..., s_n*)` where each player `i`'s strategy `s_i*` is optimal given their beliefs about others' strategies, and these beliefs are consistently updated through an iterative process that can be *described* as a correlated distribution of recommendations, then this outcome is equivalent to a CE.

**Example Scenario:** Imagine a game where players receive private signals. The IIEFG process might involve players updating their beliefs about the signals others received, and subsequently updating their strategies. If the joint distribution of signals and strategies is such that no player wants to deviate *given their observed signal and belief about others' signals*, this is a form of CE. The IIEFG process essentially constructs these beliefs and strategies iteratively.

### 3.4. Conditions for Equivalence

The equivalence is not always guaranteed. Key conditions that facilitate equivalence include:

*   **Common Knowledge of Rationality:** All players know that all players are rational.
*   **Common Prior Beliefs (initially):** Players may start with some shared understanding of the game.
*   **Information Revelation:** The iterative process effectively reveals information or creates correlated beliefs.
*   **Stability:** The outcome reached by IIEFG is stable, meaning no player has an incentive to unilaterally change their strategy.

## 4. Learning Outcomes Covered

Let's map the content to the implied learning outcomes:

*   **Understanding the core principles of Correlated Equilibrium (CE):** Defined CE and its key features.
*   **Understanding the concept of Iterated Elimination of Induced ENEE Functions (IIEFGs):** Explained the components and iterative nature of IIEFGs.
*   **Analyzing the relationship between CE and rational decision-making in games:** Discussed how CE captures no-incentive-to-deviate.
*   **Identifying conditions under which strategies in IIEFGs are equivalent to Correlated Equilibrium:** Highlighted key conditions like common knowledge of rationality and information revelation.
*   **Applying these concepts to understand strategy refinement in sequential interactions:** The iterative nature of IIEFGs directly addresses this.
*   **Comparing and contrasting CE with other equilibrium concepts (implicitly, like Nash Equilibrium):** Briefly mentioned that CE generalizes NE.

## 5. Practice Questions and Exercises

**Question 1:**
Consider a two-player game. Player 1's strategy is to play 'U' or 'D', and Player 2's strategy is to play 'L' or 'R'. The payoffs are:
(U, L): (2, 1)
(U, R): (0, 0)
(D, L): (0, 0)
(D, R): (1, 2)

Suppose an IIEFG process leads to beliefs where:
*   Player 1 believes Player 2 plays 'L' with probability 0.6 and 'R' with probability 0.4.
*   Player 2 believes Player 1 plays 'U' with probability 0.7 and 'D' with probability 0.3.

Calculate the expected utilities for each player for each of their strategies given these beliefs. Determine if these strategies form a Nash Equilibrium. Can this be supported by a Correlated Equilibrium?

**Answer 1:**

*   **Player 1's Expected Utilities:**
    *   `E[U1(U, beliefs)] = 0.6 * 2 + 0.4 * 0 = 1.2`
    *   `E[U1(D, beliefs)] = 0.6 * 0 + 0.4 * 1 = 0.4`
    Player 1 prefers 'U' (1.2 > 0.4).

*   **Player 2's Expected Utilities:**
    *   `E[U2(L, beliefs)] = 0.7 * 1 + 0.3 * 0 = 0.7`
    *   `E[U2(R, beliefs)] = 0.7 * 0 + 0.3 * 2 = 0.6`
    Player 2 prefers 'L' (0.7 > 0.6).

*   **Nash Equilibrium Check:**
    Since both players' best responses are unique given the beliefs, and these beliefs correspond to the probabilities of the strategies themselves (0.6 for L, 0.7 for U), this strategy profile (U, L) is indeed a Nash Equilibrium.

*   **Correlated Equilibrium Support:**
    Yes, any Nash Equilibrium can be supported by a Correlated Equilibrium. The CE distribution would assign probability 1 to the strategy profile (U, L).

**Question 2:**
Explain how an IIEFG process could lead to the discovery of a Correlated Equilibrium that is *not* a Nash Equilibrium. Provide a conceptual example.

**Answer 2:**
An IIEFG process could lead to a non-Nash CE if the iterative updates allow players to coordinate their strategies based on shared, correlated beliefs that are not stable under the assumption of independent strategy choices (as in Nash).

**Conceptual Example:**
Consider a game where players receive signals. Let's say players are tasked to coordinate on a "Safe" strategy or a "Risky" strategy.

*   **Game Structure:**
    *   (Safe, Safe): (5, 5)
    *   (Safe, Risky): (0, 10)
    *   (Risky, Safe): (10, 0)
    *   (Risky, Risky): (2, 2)

*   **IIEFG Process:** Imagine players receive private signals about the "state of the world" (e.g., signal 'A' or 'B').
    *   **Signal Distribution:** Suppose the signals are correlated:
        *   State A: Both players get signal 'A' (Prob = 0.5)
        *   State B: Player 1 gets 'B1', Player 2 gets 'B2' (Prob = 0.5)
    *   **IIEFG Iterations:**
        *   **Round 1:** Players have initial beliefs. They might guess the other player's signal and play accordingly.
        *   **Round 2:** Player 1, seeing their signal is 'A', infers that Player 2 also has signal 'A'. Player 1 now has a higher belief that Player 2 will play 'Safe'. Given this belief, Player 1's best response is 'Safe'.
        *   Simultaneously, Player 2, seeing their signal 'A', infers Player 1 also has 'A' and plays 'Safe'.
        *   If players receive signals 'B1' and 'B2', they might form beliefs about each other's 'B' signals and play 'Risky'.

*   **Resulting CE:** The IIEFG process, by allowing players to update beliefs based on correlated signals, could lead to a strategy profile where:
    *   If both players get signal 'A', they both play 'Safe'.
    *   If they get different 'B' signals, they both play 'Risky'.

    This distribution (e.g., 50% chance of (Safe, Safe), 50% chance of (Risky, Risky) if the 'B' signals always lead to Risky) might yield higher payoffs than any Nash Equilibrium (e.g., if there's a pure strategy NE of (Risky, Risky)). The key is that the *recommendation* to play 'Safe' for Player 1 is correlated with the *recommendation* to play 'Safe' for Player 2, based on their shared signal 'A'. If Player 1 receives the recommendation 'Safe', they don't want to deviate because they know Player 2 also received the correlated recommendation to play 'Safe'. This is the essence of CE.

## 6. Important Points to Remember

*   **CE is about coordinated beliefs and recommendations.** Players follow recommendations as long as deviating is not beneficial *given their belief that the recommendation is part of the CE distribution*.
*   **IIEFGs model iterative belief and strategy updates.** The "Induced ENEE Functions" are likely representations of expected utility given these evolving beliefs.
*   **Equivalence arises when the stable outcome of an IIEFG can be supported by a CE distribution.** This means the strategies chosen by players in the IIEFG are mutually consistent with the "no incentive to deviate" condition of CE.
*   **CE can achieve outcomes that are Pareto superior to Nash Equilibria.** This is due to the ability to use correlated information.
*   **The specific definition of "Induced ENEE Functions" is crucial for formal proofs of equivalence.** However, the conceptual link between iterative belief formation and correlated signals is generally valid.
*   **Common knowledge of rationality is a fundamental assumption.** It underpins the rationality of players in both IIEFGs and CE.

This comprehensive set of notes should provide a strong foundation for understanding the equivalence of strategies in IIEFGs and Correlated Equilibrium. Remember to consult your specific course materials for precise definitions of "ENEE Functions" if they differ from this interpretation.
