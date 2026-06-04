---
title: "limitations of subgame perfect Nash equilibrium"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 2: Correlated equilibrium (CE) "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5bd"
status: "completed"
scrapedAt: "2026-05-20T17:06:34.720Z"
---
# Module 2: Correlated Equilibrium (CE) - Limitations of Subgame Perfect Nash Equilibrium (SPNE)

This module delves into Correlated Equilibrium (CE) and its relationship with other solution concepts in game theory. A key aspect of understanding CE is appreciating why it's sometimes a more suitable or encompassing solution concept than traditional ones, particularly Subgame Perfect Nash Equilibrium (SPNE).

## Learning Outcomes:

Upon completion of this module, you will be able to:

*   Understand the concept of Subgame Perfect Nash Equilibrium (SPNE).
*   Identify situations where SPNE might not be the most appropriate or informative solution concept.
*   Appreciate the limitations of SPNE in the context of strategic interactions.
*   Recognize how Correlated Equilibrium (CE) can address some of these limitations.

## 1. Understanding Subgame Perfect Nash Equilibrium (SPNE)

### 1.1. Definition of a Game with Perfect Information

*   A game with perfect information is an extensive-form game where each player, when making a decision, knows all previous moves made by all players.
*   There are no simultaneous moves, and no hidden information about past actions.

### 1.2. Definition of a Subgame

*   A subgame of an extensive-form game is a part of the game that starts at a single decision node (and includes all subsequent nodes and branches) such that:
    *   It contains no decision node that is part of an information set with a node outside the subgame.
    *   If a decision node is in the subgame, then all nodes following it that are in the same branch of the tree are also in the subgame.
    *   Every information set that contains a node within the subgame must be entirely contained within the subgame.

### 1.3. Definition of Subgame Perfect Nash Equilibrium (SPNE)

*   **A strategy profile is a Subgame Perfect Nash Equilibrium (SPNE) if it constitutes a Nash Equilibrium (NE) in every subgame of the original game.**
*   In simpler terms, SPNE requires players to play a Nash Equilibrium not only in the overall game but also in every possible continuation of the game.
*   This is typically found using **backward induction**: starting from the end of the game and determining optimal actions at each preceding decision node.

### 1.4. Key Characteristics of SPNE

*   **Rationality:** Assumes players are perfectly rational and will always choose the action that maximizes their payoff in every possible scenario.
*   **Credibility of Threats:** Eliminates non-credible threats. A threat is non-credible if it is not optimal for the player to carry out the threat when it is their turn to act.
*   **Eliminates "Off-Equilibrium Path" Behavior:** SPNE enforces rational behavior even in scenarios that might never occur if the equilibrium strategies were followed from the start.

## 2. Limitations of Subgame Perfect Nash Equilibrium (SPNE)

While powerful, SPNE has certain limitations that make other solution concepts, like Correlated Equilibrium, more relevant in specific contexts.

### 2.1. The Problem of Irrationality and Bounded Rationality

*   **Assumption of Perfect Rationality:** SPNE assumes players are perfectly rational and have complete knowledge of the game tree and other players' rationality.
*   **Real-world Complexity:** In many real-world situations (and even in complex games), players may not be perfectly rational. They might make mistakes, have cognitive limitations, or be influenced by emotions.
*   **SPNE's Inability to Capture Irrational Behavior:** SPNE prescriptions for off-equilibrium paths might rely on players acting in ways that are counter to observed or predicted irrational behavior. If a player is known to be irrational, an SPNE strategy that relies on a threat they wouldn't credibly carry out might be inappropriate.

    *   **Example:** Consider a game where Player 1 has to choose between two actions, leading to different subgames for Player 2. If Player 2 is known to be highly risk-averse and would never choose a certain action in a specific subgame, an SPNE might prescribe a threat by Player 1 contingent on that action. However, if Player 2's irrationality is known, Player 1 might need to consider different strategies.

### 2.2. The Problem of Trembling Hand (Though SPNE *can* handle it to an extent, its prescription can be problematic)

*   **Trembling Hand:** A small probability that a player makes a mistake and deviates from their intended strategy.
*   **SPNE and Trembling Hand:** "Trembling Hand Perfect Equilibrium" (THPE) is a refinement of NE that explicitly accounts for trembles. SPNE, in its purest form, doesn't inherently incorporate this. While one can construct SPNEs that "account for" potential trembles by ensuring rational play even after a deviation, the specific prescribed strategies can sometimes be unintuitive or overly complex when dealing with small probabilities of error.
*   **Focus on Pure Strategies:** SPNE often focuses on pure strategy equilibria, whereas real-world behavior or equilibria in more complex games might involve mixed strategies. While SPNE can be applied to games with mixed strategies, the interpretation of what constitutes "rational play" in response to a deviation can become complex when mixed strategies are involved.

### 2.3. The Problem of Non-Credibility of Off-Equilibrium Promises/Threats in the Absence of Commitment

*   **SPNE's Core Strength:** SPNE is excellent at eliminating non-credible threats by requiring optimal play in all subgames.
*   **When SPNE's Logic is Too Strong:** In some scenarios, a player *might* be able to influence another player's decision by making a promise or threat that, strictly speaking, is not optimal for them to carry out if the situation arises. However, if the other player *believes* this commitment (even if it's not truly credible in a subgame), it can lead to mutually beneficial outcomes. SPNE, by enforcing strict subgame optimality, might rule out these beneficial outcomes.

    *   **Example: Chain Store Paradox**
        *   **Scenario:** An incumbent firm (Player 1) faces a potential entrant (Player 2) in multiple markets over time. In each market, the entrant decides whether to enter or stay out. If the entrant enters, the incumbent can either accommodate (share profits) or fight (inflict losses on both).
        *   **SPNE Prediction:** Using backward induction, in the *last* market, the incumbent would rationally choose to accommodate any entry because fighting would be more costly than sharing profits. Knowing this, the entrant will enter the last market. Working backward, the incumbent will accommodate in the second-to-last market, and so on. This leads to the incumbent accommodating entry in *all* markets.
        *   **Limitation:** The SPNE prediction is that the incumbent will always accommodate. However, in reality, the incumbent might *threaten* to fight in every market, hoping that this reputation for being aggressive will deter entry altogether. If the entrant *believes* this threat (even if it's not strictly credible in the last subgame), the entrant might stay out, leading to higher profits for the incumbent than if they accommodated. SPNE, by its nature of forward-looking rationality in every subgame, fails to capture this potential deterrent effect of a reputation built on seemingly non-credible threats. The threat of fighting in the last period, while not optimal for the incumbent *in that period*, could be crucial for deterring entry in earlier periods.

### 2.4. The Problem of Coordination and Multiple Equilibria

*   **SPNE Can Predict Multiple Equilibria:** In many games, SPNE can identify multiple possible equilibria.
*   **Difficulty in Selection:** SPNE itself doesn't provide a clear criterion for selecting among these multiple equilibria. Players might have different preferences or beliefs about which equilibrium will be played, leading to coordination problems.
*   **Correlated Equilibrium's Advantage:** Correlated Equilibrium can offer a mechanism for coordination, especially when players can receive a common signal that recommends actions.

### 2.5. The "Folk Theorem" and Infinite Horizon Games

*   **Folk Theorem:** In infinitely repeated games with a sufficient discount factor, a wide range of payoff profiles can be supported as Nash equilibria (including SPNEs under certain conditions).
*   **Complexity and Indeterminacy:** The vast number of possible equilibria in infinite horizon games can make SPNE a less powerful predictive tool. The specific equilibrium played often depends on focal points or shared beliefs that are not explicitly modeled by SPNE alone.

## 3. Transition to Correlated Equilibrium (CE)

*   Correlated Equilibrium offers a broader set of equilibrium outcomes compared to Nash Equilibrium and SPNE.
*   CE allows for players to receive a "recommendation" from a trusted third party (or a shared signal) that guides their actions. This recommendation is correlated across players.
*   The key is that even though players only know their own recommendation, they have no incentive to deviate from it, assuming others will follow their recommendations.
*   **CE can support outcomes that are not SPNEs**, particularly those involving coordination or the exploitation of non-credible threats for strategic advantage (as seen in the Chain Store Paradox example if interpreted through a CE lens).

## 4. Practice Questions/Exercises

**Question 1:**
Consider a simple sequential game: Player 1 chooses "Left" or "Right." If Player 1 chooses "Left," the game ends with payoffs (2, 1) for (Player 1, Player 2). If Player 1 chooses "Right," then Player 2 chooses "Up" or "Down." If Player 2 chooses "Up," payoffs are (3, 2). If Player 2 chooses "Down," payoffs are (0, 0).

a) Draw the game tree.
b) Identify all subgames.
c) Find the Subgame Perfect Nash Equilibrium (SPNE) using backward induction.
d) What are the payoffs in the SPNE?

**Question 2:**
In the Chain Store Paradox example, explain why the SPNE prediction (always accommodate) might not reflect actual strategic behavior. What kind of behavior does the SPNE miss?

**Question 3:**
Which of the following is a primary limitation of SPNE?
a) It assumes players are perfectly rational.
b) It can only be applied to finite games.
c) It is too encompassing and predicts too few equilibria.
d) It cannot account for simultaneous moves.

**Question 4:**
True or False: SPNE is always the most suitable solution concept for games involving potential irrationality or errors by players.

---

## Answers to Practice Questions

**Answer 1:**

a) **Game Tree:**

```
      P1
     /  \
    L    R
   /      \
(2,1)     P2
         /  \
        U    D
       /      \
    (3,2)    (0,0)
```

b) **Subgames:**
    *   The entire game itself is a subgame.
    *   The subgame starting at Player 2's decision node after Player 1 chooses "Right."

c) **SPNE using Backward Induction:**
    *   **At Player 2's node:** Player 2 chooses between "Up" (payoff 2) and "Down" (payoff 0). Player 2 will choose "Up" to maximize their payoff.
    *   **At Player 1's node:** Player 1 anticipates Player 2's choice.
        *   If Player 1 chooses "Left," payoff is 2.
        *   If Player 1 chooses "Right," they anticipate Player 2 choosing "Up," resulting in a payoff of 3.
    *   Player 1 chooses "Right" to maximize their payoff (3 > 2).
    *   **SPNE Strategy Profile:** (Player 1: Right, Player 2: Up if P1 plays Right).

d) **Payoffs in SPNE:** (3, 2)

**Answer 2:**
The SPNE prediction of always accommodating entry fails to capture the deterrent effect of a reputation. The incumbent's threat to fight might not be credible in the last subgame (where fighting is costly), but the *belief* by potential entrants that the incumbent *might* fight in any market could deter them from entering in the first place. SPNE, by focusing on strict subgame optimality, assumes players won't be deterred by threats that are not optimal to carry out, missing out on the strategic value of cultivating a tough reputation.

**Answer 3:**
**a) It assumes players are perfectly rational.** This is a limitation because real-world agents often exhibit bounded rationality.

**Answer 4:**
**False.** SPNE's strict rationality assumptions can make it unsuitable for games with known irrationality or when the complexity of correctly prescribing responses to every possible (even unlikely) deviation becomes unwieldy.

---

## Important Points to Remember:

*   **SPNE is a refinement of Nash Equilibrium,** requiring equilibrium play in every subgame.
*   **Backward induction is the primary tool for finding SPNE in finite games of perfect information.**
*   **SPNE effectively eliminates non-credible threats.**
*   **Key limitations of SPNE include its reliance on perfect rationality, its potential inability to capture the strategic value of non-credible threats (as seen in the Chain Store Paradox), and its difficulties in selecting among multiple equilibria or dealing with extreme complexity.**
*   **Correlated Equilibrium offers a broader set of outcomes and can sometimes address limitations related to coordination and strategic reputation building that SPNE might overlook.**
