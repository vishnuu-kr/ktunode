---
title: "subgame perfection"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 2: Correlated equilibrium (CE) "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5bc"
status: "completed"
scrapedAt: "2026-05-20T17:06:34.083Z"
---
# Module 2: Correlated Equilibrium (CE) - Subgame Perfection

## 1. Introduction to Subgame Perfection

Subgame perfection is a refinement of Nash equilibrium for **extensive-form games** (games played sequentially). It aims to eliminate non-credible threats by ensuring that strategies are optimal not just at the beginning of the game, but also at every possible decision point (subgame) within the game.

**Key Idea:** A strategy profile is subgame perfect if it constitutes a Nash equilibrium in *every* subgame of the original game.

### 1.1. Extensive-Form Games

*   **Definition:** Games where players move in sequence, and players have knowledge of previous moves. These are often represented by **game trees**.
*   **Components of a Game Tree:**
    *   **Decision Nodes:** Points where a player makes a choice.
    *   **Branches:** Represent the available actions at a decision node.
    *   **Terminal Nodes (Leaves):** Endpoints of the game, where payoffs are assigned to players.
    *   **Information Sets:** Collections of decision nodes where a player cannot distinguish which node they are at. (For subgame perfection, we typically focus on games with perfect information, where each information set contains only one node).

### 1.2. Subgames

*   **Definition:** A subgame is a part of an extensive-form game that:
    1.  Starts at a decision node.
    2.  Includes all subsequent nodes and branches reachable from that starting node.
    3.  If a decision node is in the subgame, then all nodes within the same information set as that node must also be in the subgame. (Crucially for perfect information, this means if a node is in the subgame, its entire information set must be in the subgame. In perfect information, this means the information set contains only that node).
    4.  Does not "cut through" any information sets.

*   **The "Whole Game" is a Subgame:** The original extensive-form game itself is considered a subgame.

## 2. Nash Equilibrium vs. Subgame Perfect Nash Equilibrium (SPNE)

While Nash equilibrium requires players to play their best response given the strategies of others, it doesn't explicitly deal with the sequential nature of extensive-form games. This can lead to equilibria involving "non-credible threats."

*   **Non-Credible Threat:** A threat made by a player that would not be in their own best interest to carry out if the situation were to arise.

**Example: The Centipede Game (Simplified)**

Consider a game where Player 1 can either "Take" $1 (and Player 2 gets $0) or "Pass." If Player 1 passes, Player 2 can either "Take" $3 (and Player 1 gets $0) or "Pass." If Player 2 passes, Player 1 can then "Take" $4 (and Player 2 gets $2) or "Pass." If Player 1 passes again, Player 2 gets $6 and Player 1 gets $5.

*   **Game Tree:**

    ```
       (P1)
       /   \
      T     P
     (1,0)  (P2)
           /   \
          T     P
         (0,3)  (P1)
               /   \
              T     P
             (4,2) (5,6)
    ```

*   **Nash Equilibrium (NE) Example:** Consider the strategy profile where Player 1 plays "Pass" initially, and Player 2 plays "Take" if Player 1 passes. If Player 2's move were reached (which it isn't in this strategy), Player 1's best response would be "Take."
    *   Player 1's strategy: Pass, Take (if P2 passes)
    *   Player 2's strategy: Take (if P1 passes)
    *   Outcome: Player 1 passes, Player 2 takes. Payoffs: (0, 3).

    Let's check if this is a Nash Equilibrium:
    *   **Player 1's deviation:** If Player 1 deviates to "Take" initially, they get $1. Since $1 > $0, Player 1 has an incentive to deviate. **Therefore, this is not a Nash Equilibrium.**

    Let's try another NE strategy: Player 1 plays "Take" immediately. Player 2's strategy is irrelevant as they never get to move.
    *   Player 1's strategy: Take
    *   Player 2's strategy: (Doesn't matter, e.g., Take if P1 passes)
    *   Outcome: Player 1 takes. Payoffs: (1, 0).

    Is this a Nash Equilibrium?
    *   **Player 1's deviation:** If Player 1 deviates to "Pass," Player 2 will get to move. According to Player 2's strategy (Take), Player 2 will take and Player 1 gets $0. Since $1 > $0, Player 1 has no incentive to deviate.
    *   **Player 2's deviation:** Player 2's strategy is "Take" (if P1 passes). This decision node is never reached. In such cases, *any* strategy for Player 2 is a best response. So, Player 2 has no incentive to deviate from "Take."
    *   **Conclusion:** (Take, Take) is a Nash Equilibrium. Payoffs: (1, 0).

*   **The Problem with Non-Credible Threats:** What if we had a strategy where Player 1 played "Pass" and Player 2 played "Pass" if Player 1 passed, and Player 1 played "Pass" again if Player 2 passed?
    *   Player 1's strategy: Pass, Pass (if P2 passes)
    *   Player 2's strategy: Pass (if P1 passes)
    *   Outcome: Player 1 passes, Player 2 passes, Player 1 passes again. Payoffs: (5, 6).

    Let's consider Player 2's strategy "Pass" if Player 1 passes. This is a threat. If Player 1's initial move were "Pass," Player 2 would get to choose. If Player 2 chooses "Pass," Player 1 would then get to choose. If Player 1 chose "Take," they would get $4, and Player 2 would get $2. If Player 2 chose "Take" in response to Player 1's initial "Pass," Player 2 would get $3. Player 2 preferring $3 over $2 in the scenario where Player 1 takes (and not $6 over $2) makes Player 2's strategy "Pass" conditional on Player 1's initial "Pass" potentially non-credible.

    The SPNE concept addresses this by requiring that strategies are optimal in *every* subgame.

## 3. Backward Induction

Backward induction is the standard method for finding Subgame Perfect Nash Equilibria in finite extensive-form games with perfect information.

*   **Process:**
    1.  Start at the last decision nodes in the game (those closest to the terminal nodes).
    2.  At each of these last decision nodes, the player whose turn it is will choose the action that maximizes their payoff, assuming all subsequent play is also optimal.
    3.  Replace these last decision nodes and their subsequent branches with the payoffs that result from the optimal choice.
    4.  Move backwards up the game tree, repeating the process. At each preceding decision node, the player chooses the action that maximizes their payoff, taking into account the already determined optimal play in the subsequent subgames.
    5.  Continue until the initial decision node is reached. The sequence of optimal actions determined at each node constitutes the SPNE strategy profile.

**Example: Centipede Game Revisited with Backward Induction**

```
   (P1)
   /   \
  T     P
 (1,0)  (P2)
       /   \
      T     P
     (0,3)  (P1)
           /   \
          T     P
         (4,2) (5,6)
```

1.  **Last Decision Node (Player 1):** At the node where Player 1 gets to choose after Player 2 has passed, Player 1 compares getting $4 (by choosing "Take") versus getting $5 (by choosing "Pass").
    *   Player 1 chooses **"Pass"** (payoff 5). The outcome of this subgame is (5, 6).

2.  **Previous Decision Node (Player 2):** Now, consider Player 2's decision node. Player 2 knows that if they choose "Pass," Player 1 will subsequently choose "Pass" (as determined in step 1), leading to payoffs (5, 6). If Player 2 chooses "Take," they get $3, and Player 1 gets $0.
    *   Player 2 compares getting $3 (by choosing "Take") versus getting $6 (by choosing "Pass").
    *   Player 2 chooses **"Pass"** (payoff 6). The outcome of this subgame is (5, 6).

3.  **Initial Decision Node (Player 1):** Finally, consider Player 1's initial decision node. Player 1 knows that if they choose "Pass," Player 2 will choose "Pass" (as determined in step 2), leading to payoffs (5, 6). If Player 1 chooses "Take" initially, they get $1, and Player 2 gets $0.
    *   Player 1 compares getting $1 (by choosing "Take") versus getting $5 (by choosing "Pass").
    *   Player 1 chooses **"Pass"** (payoff 5).

**Subgame Perfect Nash Equilibrium Strategy Profile:**

*   **Player 1:** Pass, then Pass (if P2 passes), then Take (if P2 passes and P1 has already passed).
    *   More formally: Play "Pass" at the first node. If Player 2 passes at their node, play "Pass" at the subsequent node.
*   **Player 2:** Pass (if Player 1 passes).

**Outcome:** Player 1 passes, Player 2 passes, Player 1 passes again. Payoffs: (5, 6).

**Important Note:** In the original Centipede Game, the SPNE is for Player 1 to always "Pass" and Player 2 to always "Pass," leading to the maximum joint payoff. This highlights how backward induction can reveal outcomes that seem counter-intuitive but are robust against non-credible threats. The surprising empirical results in experimental economics often show players "defecting" earlier in the Centipede game than predicted by SPNE.

## 4. Applying Backward Induction to Games with Imperfect Information (Cautionary Note)

Backward induction is strictly for **finite extensive-form games with perfect information**. If there is imperfect information (information sets with more than one node), backward induction is not directly applicable in its pure form. Instead, one must use the definition of subgame perfection directly: the strategy profile must induce a Nash equilibrium in every subgame.

**Example: Entry Deterrence Game**

*   **Setup:** An established firm (Incumbent, I) and a potential entrant (Entrant, E).
*   **Game Tree:**
    1.  Entrant decides whether to "Enter" or "Stay Out."
    2.  If Entrant "Stays Out," payoffs are (Incumbent: 2, Entrant: 0).
    3.  If Entrant "Enters," Incumbent decides whether to "Fight" or "Accommodate."
    4.  If Incumbent "Fights," payoffs are (Incumbent: 0, Entrant: -1).
    5.  If Incumbent "Accommodates," payoffs are (Incumbent: 1, Entrant: 1).

*   **Game Tree Representation:**

    ```
            (E)
           /   \
          Enter Stay Out
         (I)   (2, 0)
        /   \
       Fight Accommodate
      (0,-1) (1,1)
    ```

*   **Subgames:**
    *   The entire game.
    *   The subgame starting after the Entrant decides to "Enter" (this is the Incumbent's decision node).

*   **Backward Induction:**
    1.  **Subgame after Entrant Enters (Incumbent's decision):** Incumbent compares "Fight" (payoff 0) with "Accommodate" (payoff 1).
        *   Incumbent chooses **"Accommodate"**. The outcome of this subgame is (1, 1).
    2.  **Initial Decision Node (Entrant's decision):** Entrant knows that if they choose "Enter," Incumbent will "Accommodate," leading to payoffs (1, 1). If Entrant chooses "Stay Out," payoffs are (2, 0).
        *   Entrant compares getting 0 (by "Stay Out") versus getting 1 (by "Enter").
        *   Entrant chooses **"Enter"**.

*   **Subgame Perfect Nash Equilibrium Strategy Profile:**
    *   **Entrant:** Enter
    *   **Incumbent:** Accommodate (if Entrant enters)

*   **Outcome:** Entrant enters, Incumbent accommodates. Payoffs: (1, 1).

**Analysis of Non-Credible Threats:**
In this game, if the Incumbent had a strategy of "Fight" if the Entrant enters, this would be a non-credible threat. The SPNE correctly identifies that the Incumbent would rationally choose to accommodate rather than fight and receive a payoff of 0.

## 5. Subgame Perfection and Correlated Equilibrium

While subgame perfection is a refinement for sequential games, Correlated Equilibrium (CE) is a solution concept for simultaneous-move games (or extensive-form games treated as a whole).

*   **Relationship:** Subgame perfection is a *stronger* concept than Nash Equilibrium, and by extension, any SPNE outcome must be a Nash Equilibrium outcome. However, the sets of outcomes supported by SPNE and CE are not directly comparable.
    *   An SPNE outcome is always a Nash Equilibrium outcome.
    *   A CE outcome is not necessarily an SPNE outcome.
    *   An SPNE strategy profile might not induce a CE.

*   **Key Distinction:** CE relies on a shared "signal" or "correlation device" that coordinates strategies. Subgame perfection relies on rationality at every stage of the game, independent of any external device.

**Example of a CE not being an SPNE:**
Consider a game where players play simultaneously. If we were to embed this into an extensive form game where players are *informed* of the outcome of the simultaneous game (which is a bit artificial), then a CE might be derived. However, if there are subgames within the extensive form that are not captured by the simultaneous move structure, or if the CE does not satisfy the sequential rationality, it won't be an SPNE.

**Focus of this Module:** The topic of subgame perfection is within the context of Module 2, which is about Correlated Equilibrium. This suggests an exploration of how sequential rationality (subgame perfection) interacts with or differs from equilibrium concepts in simpler games, or perhaps how sequential play can be modeled to incorporate elements of correlation. However, the core of subgame perfection is about eliminating non-credible threats in sequential games.

## 6. Practice Questions

**Question 1:**
Consider the following extensive-form game:

```
      (P1)
     /    \
    A      B
   (3,1)  (P2)
         /    \
        C      D
       (2,4)  (0,0)
```

1.  Identify all subgames in this game.
2.  Find the Subgame Perfect Nash Equilibrium (SPNE) strategy profile using backward induction.
3.  What is the outcome of the SPNE?
4.  Is the strategy profile (B, D) a Nash Equilibrium? Is it a Subgame Perfect Nash Equilibrium? Explain.

**Question 2:**
In the Centipede game with payoffs (1,0), (0,3), (4,2), (5,6) for players (1,2) as the game progresses, explain why the Nash equilibrium (Take, Take) with payoffs (1,0) might be considered "unreasonable" in a real-world scenario, and how subgame perfection addresses this.

**Question 3:**
True or False: Every Subgame Perfect Nash Equilibrium is also a Nash Equilibrium. Explain your reasoning.

## 7. Answers to Practice Questions

**Answer 1:**
1.  **Subgames:**
    *   The entire game (starting at Player 1's first node).
    *   The subgame starting at Player 2's decision node (after Player 1 plays B).

2.  **SPNE using Backward Induction:**
    *   **Subgame starting at Player 2's node:** Player 2 chooses between C (payoff 4) and D (payoff 0). Player 2 will choose **C**. The outcome of this subgame is (2, 4).
    *   **Initial Decision Node (Player 1):** Player 1 compares playing A (payoff 3) with playing B. If Player 1 plays B, they know Player 2 will play C (from the previous step), resulting in payoffs (2, 4). So, Player 1 compares 3 (from A) with 2 (from B). Player 1 will choose **A**.

    **SPNE Strategy Profile:**
    *   **Player 1:** A
    *   **Player 2:** C (if Player 1 plays B)

3.  **Outcome of SPNE:** The outcome is (3, 1).

4.  **Is (B, D) a Nash Equilibrium? Is it SPNE?**
    *   **Nash Equilibrium Check:**
        *   Player 1 plays B, Player 2 plays D. Outcome: (0, 0).
        *   **Player 1's deviation:** If Player 1 deviates to A, they get 3. Since 3 > 0, Player 1 has an incentive to deviate. **Therefore, (B, D) is NOT a Nash Equilibrium.**
    *   **Subgame Perfect Nash Equilibrium Check:** Since it's not even a Nash Equilibrium for the whole game, it cannot be an SPNE. Furthermore, in the subgame where Player 2 chooses C or D, Player 2 choosing D (payoff 0) is not optimal when C gives a payoff of 4. So, the strategy part for Player 2 in the subgame is not a best response.

**Answer 2:**
The Nash equilibrium (Take, Take) with payoffs (1,0) in the Centipede game results from Player 1 taking the immediate payoff. While it's a Nash equilibrium, it relies on Player 2's threat to "Take" if Player 1 passes being credible. However, if Player 1 *did* pass, Player 2 would face a choice between "Take" (payoff 3) and "Pass" (leading to Player 1 taking, giving Player 2 payoff 2). Player 2 would rationally choose "Take" in that scenario. The "unreasonableness" comes when we consider the later stages. If Player 1 were to pass again after Player 2 passed, Player 1 would get 4, and Player 2 would get 2. The later stages of the game often involve higher payoffs for both players if the game continues.

Subgame perfection addresses this by requiring strategies to be optimal in *every* subgame. Using backward induction, we see that at the last decision node, Player 1 should pass to get 5 instead of taking to get 4. Knowing this, Player 2 at their decision node would pass to get 6 instead of taking to get 3. Finally, Player 1 at the initial node would pass to get 5 instead of taking to get 1. This "rationalizes" the continuation of the game, leading to the SPNE outcome. The initial "Take" action in the NE is deemed unreasonable because it relies on future actions that are not optimal in their respective subgames.

**Answer 3:**
**True.**

**Reasoning:** The definition of a Subgame Perfect Nash Equilibrium (SPNE) is that the strategy profile must induce a Nash Equilibrium in *every* subgame of the original game. The original game itself is the largest subgame. Therefore, if a strategy profile is an SPNE, it must, by definition, constitute a Nash Equilibrium in the original game.

## 8. Important Points to Remember

*   **SPNE is for sequential games (extensive-form games).**
*   **Key Goal:** Eliminate non-credible threats.
*   **Method for Perfect Information:** Backward Induction.
*   **Definition:** A strategy profile is SPNE if it is a Nash Equilibrium in *every* subgame.
*   **Subgames:** Must start at a decision node and include all subsequent nodes and branches, without cutting through information sets.
*   **Backward Induction Steps:** Start at the end of the game, determine optimal actions at the last decision nodes, and work backwards, assuming optimal play in subsequent subgames.
*   **SPNE vs. NE:** SPNE is a refinement of NE; all SPNEs are NEs, but not all NEs are SPNEs.
*   **SPNE vs. CE:** The concepts are distinct. SPNE is about sequential rationality, while CE is about coordinated play based on a correlation device. Their outcome sets are not directly comparable.
