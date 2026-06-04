---
title: "extensive form games"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 2: Correlated equilibrium (CE) "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5bb"
status: "completed"
scrapedAt: "2026-05-20T17:06:33.381Z"
---
# Game Theory and Mechanism Design: Module 2 - Correlated Equilibrium (CE)

## Topic: Extensive Form Games

This module focuses on Correlated Equilibrium (CE), and understanding extensive form games is crucial for appreciating its nuances, especially when players make sequential decisions.

---

### 1. Learning Outcomes

Upon completion of this topic, you should be able to:

*   **Understand the representation of sequential decision-making in game theory using extensive form games.**
*   **Identify and define key components of extensive form games: players, actions, nodes, information sets, chance nodes, and payoffs.**
*   **Distinguish between perfect information and imperfect information games.**
*   **Recognize the role of strategies in extensive form games.**
*   **Understand how to analyze and find equilibrium concepts (like Nash Equilibrium) in extensive form games.**
*   **Appreciate the link between extensive form games and the development of correlated equilibrium in sequential settings.**

---

### 2. Key Concepts and Definitions

#### 2.1 What are Extensive Form Games?

*   **Definition:** Extensive form games are a powerful way to represent games where players make decisions **sequentially**. Unlike strategic (normal) form games, they explicitly show the order of moves, the information players have at each stage, and the consequences of each sequence of actions.

*   **Why use Extensive Form?**
    *   Captures the **dynamic** nature of many real-world interactions (e.g., negotiations, auctions, political campaigns).
    *   Allows for the analysis of **strategies** that depend on the history of play.
    *   Provides a foundation for understanding concepts like **backward induction** and **subgame perfect Nash equilibrium**.

#### 2.2 Components of Extensive Form Games

Extensive form games are typically represented by a **game tree**.

*   **Players:** The individuals or entities making decisions.
*   **Nodes:**
    *   **Decision Nodes:** Points in the game tree where a specific player must make a decision.
    *   **Terminal Nodes (End Nodes):** Points where the game concludes, and payoffs are assigned.
*   **Actions (Moves):** The choices available to a player at a decision node.
*   **Branches:** Connect nodes, representing the choices made. Each branch from a decision node corresponds to an action.
*   **Payoffs:** The utility or outcome assigned to each player at the terminal nodes. Payoffs are usually represented as vectors (e.g., (Player 1's payoff, Player 2's payoff)).
*   **Chance Nodes:** Points where an outcome is determined by chance (e.g., rolling a die, drawing a card). These nodes are often controlled by a "nature" player.
*   **Information Sets:**
    *   **Definition:** A collection of decision nodes where a player cannot distinguish which node they are at. If nodes belong to the same information set for a player, then that player must choose the same action at all nodes within that information set.
    *   **Perfect Information:** If every information set contains exactly one node, the game is one of **perfect information**. Players know the complete history of play up to their decision.
    *   **Imperfect Information:** If at least one information set contains more than one node, the game is one of **imperfect information**. Players may not know exactly where they are in the game tree.
    *   **Example:** In Chess, players move sequentially and see all previous moves, so it's a game of perfect information. In Rock-Paper-Scissors, simultaneous moves mean players don't know the other's move, making it a game of imperfect information (often represented as a strategic form game, but sequential versions exist).

#### 2.3 Strategies in Extensive Form Games

*   **Definition:** A strategy for a player specifies the action they will take at *every* decision node where it is their turn to move.
    *   **Crucial Point:** A strategy must specify an action even for nodes the player might not reach if they follow other parts of their strategy. This is essential for defining expectations and analyzing deviations.

*   **Types of Strategies:**
    *   **Pure Strategy:** A complete plan of action for a player, specifying a single action for each information set.
    *   **Mixed Strategy:** A probability distribution over pure strategies.

#### 2.4 Analyzing Extensive Form Games: Equilibrium Concepts

*   **Nash Equilibrium (NE):** A strategy profile where no player can improve their payoff by unilaterally changing their strategy, given the strategies of other players.
    *   **Challenge in Extensive Form:** Simply converting an extensive form game to a strategic form game and finding NE can lead to **non-credible threats**.

*   **Subgame Perfect Nash Equilibrium (SPNE):** A refinement of Nash Equilibrium that applies to extensive form games.
    *   **Definition:** A strategy profile is an SPNE if it constitutes a Nash Equilibrium in *every subgame* of the original game.
    *   **Subgame:** A subgame starts at a decision node $n$ if:
        1.  $n$ is the only node in its information set.
        2.  All successors of $n$ are also successors of $n$.
        3.  If a node $m$ is in the subgame, and $m'$ is a successor of $m$, then $m'$ is also in the subgame.
    *   **Backward Induction:** The primary method for finding SPNE in finite games of perfect information. It involves solving the game from the end backwards.
        1.  Start at the terminal nodes.
        2.  At the last set of decision nodes before the terminal nodes, players choose the action that maximizes their payoff, anticipating the subsequent terminal payoffs.
        3.  Work backwards, with each player choosing the action that maximizes their payoff, assuming future players will also play optimally according to the SPNE strategy already determined for later stages.

*   **Credible Threats/Promises:** SPNE eliminates strategy profiles that rely on threats or promises that a player would not rationally carry out if the situation arises.

---

### 3. Examples

#### Example 3.1: A Simple Sequential Game (Perfect Information)

Consider a game where Player 1 chooses between 'Left' (L) and 'Right' (R). If Player 1 chooses L, the game ends with payoffs (2, 1). If Player 1 chooses R, then Player 2 chooses between 'Up' (U) and 'Down' (D). The payoffs are:
*   (R, U): (1, 3)
*   (R, D): (3, 2)

**Game Tree Representation:**

```
       (Player 1)
        /     \
       L       R
      /         \
   (2, 1)     (Player 2)
               /     \
              U       D
             /         \
          (1, 3)       (3, 2)
```

**Analysis using Backward Induction (Finding SPNE):**

1.  **Last Mover:** Player 2 at the node following Player 1's 'R'.
    *   If Player 2 chooses U, payoff is 3.
    *   If Player 2 chooses D, payoff is 2.
    *   Player 2 will choose U to maximize their payoff (3 > 2).

2.  **First Mover:** Player 1, anticipating Player 2's optimal move.
    *   If Player 1 chooses L, payoff is 2.
    *   If Player 1 chooses R, they anticipate Player 2 will choose U, leading to a payoff of 1 for Player 1.
    *   Player 1 will choose L to maximize their payoff (2 > 1).

**SPNE Strategy Profile:**
*   Player 1: L
*   Player 2: U (if Player 1 plays R)

**SPNE Outcome:** (L, (R if reached: U)) results in payoffs (2, 1).

**Note on Strategy Specification:** Player 2's strategy must specify what they do even if Player 1 plays R (which they won't in equilibrium). So Player 2's strategy is "Choose U if Player 1 plays R".

#### Example 3.2: A Game with Imperfect Information

Consider a game where Player 1 chooses L or R.
*   If Player 1 chooses L, payoffs are (1, 1).
*   If Player 1 chooses R, then Player 2 chooses U or D.
    *   If Player 2 chooses U, payoffs are (0, 0).
    *   If Player 2 chooses D, payoffs are (2, 2).

**Crucial Addition for Imperfect Information:** Player 2 does NOT know what Player 1 chose when it's Player 2's turn to move. This means both decision nodes for Player 2 are in the same information set.

**Game Tree Representation:**

```
       (Player 1)
        /     \
       L       R
      /         \
   (1, 1)     {Player 2}
               /     \
              U       D
             /         \
          (0, 0)       (2, 2)
```
*The curly braces `{}` indicate an information set for Player 2.*

**Analysis:**

*   **Subgame starting at Player 2's node:** Player 2 faces a choice. If Player 2 chooses U, payoff is 0. If Player 2 chooses D, payoff is 2. Player 2 will choose D.

*   **Player 1's Decision:** Player 1 anticipates Player 2's choice.
    *   If Player 1 chooses L, payoff is 1.
    *   If Player 1 chooses R, anticipating Player 2 playing D, payoff is 2.
    *   Player 1 will choose R.

**SPNE Strategy Profile:**
*   Player 1: R
*   Player 2: D (at their information set)

**SPNE Outcome:** (R, (U or D, but D is chosen)) results in payoffs (2, 2).

#### Example 3.3: Non-credible Threat leading to Nash Equilibrium vs. SPNE

Consider a game where Player 1 can Invest (I) or Not Invest (N).
*   If Player 1 chooses N, payoffs are (1, 1).
*   If Player 1 chooses I, then Player 2 can Accommodate (A) or Fight (F).
    *   (I, A): (3, 3)
    *   (I, F): (0, 0)

**Game Tree:**

```
       (Player 1)
        /     \
       N       I
      /         \
   (1, 1)     (Player 2)
               /     \
              A       F
             /         \
          (3, 3)       (0, 0)
```

**SPNE Analysis (Backward Induction):**
1.  **Player 2:** If Player 1 invests, Player 2 chooses between A (payoff 3) and F (payoff 0). Player 2 chooses A.
2.  **Player 1:**
    *   If Player 1 chooses N, payoff is 1.
    *   If Player 1 chooses I, anticipating Player 2 playing A, payoff is 3.
    *   Player 1 chooses I.

**SPNE Strategy Profile:**
*   Player 1: I
*   Player 2: A (if Player 1 plays I)

**SPNE Outcome:** (I, A) with payoffs (3, 3).

**Consider a Nash Equilibrium that is NOT SPNE:**
Suppose Player 2's strategy was "F if Player 1 plays I". Player 1 knows this.
*   Player 1's choice:
    *   N: payoff 1
    *   I: payoff 0 (because Player 2 will F)
    *   Player 1 chooses N.

**Strategy Profile:**
*   Player 1: N
*   Player 2: F (if Player 1 plays I)

This is a Nash Equilibrium because:
*   If Player 1 deviates to I, they get 0, which is worse than 1 (their current payoff from N). So Player 1 doesn't want to deviate.
*   If Player 2 deviates to A (instead of F) when Player 1 plays I, they get 3, which is better than 0 (their current payoff from F). **This means Player 2 wants to deviate.**

Ah, the above reasoning for NE was flawed. Let's correct:

**Let's re-evaluate the NE vs SPNE distinction:**

**SPNE Strategy Profile:** (Player 1: I, Player 2: A if P1 plays I)
*   Player 1's payoff: 3
*   Player 2's payoff: 3
*   No player can improve by deviating *given the other's strategy*.
    *   P1 deviates to N: gets 1 (worse than 3).
    *   P2 deviates to F (if P1 plays I): gets 0 (worse than 3).

**Consider this Strategy Profile:** (Player 1: N, Player 2: F if P1 plays I)
*   Player 1's payoff: 1 (because P1 chooses N)
*   Player 2's payoff: 1 (because P1 chooses N)

**Is this a Nash Equilibrium?**
*   **Player 1:** If P1 switches to I, they anticipate P2 playing F, resulting in a payoff of 0. Since 0 < 1, P1 does NOT want to switch from N.
*   **Player 2:** Player 2's strategy is "F if P1 plays I". Player 2's actual action in this profile is irrelevant because P1 plays N. However, we must check if P2 has an incentive to deviate *from their stated strategy*. If P1 plays I, P2 gets 0 by playing F. If P2 were to play A, they would get 3. Since 3 > 0, Player 2 *would* prefer to play A if Player 1 were to play I.
    *   **This profile (P1:N, P2:F if P1 plays I) IS a Nash Equilibrium.** It's just not subgame perfect. The threat from Player 2 to "Fight" (F) is **non-credible** because if the situation (Player 1 playing I) actually arose, Player 2 would be better off "Accommodating" (A).

This example highlights why SPNE is a more compelling equilibrium concept for sequential games.

---

### 4. Practice Questions and Exercises

**Question 1:**
Draw the game tree for the following sequential game: Player 1 chooses between 'A' and 'B'. If Player 1 chooses 'A', the payoffs are (5, 0). If Player 1 chooses 'B', Player 2 chooses between 'X' and 'Y'. The payoffs are: (B, X) -> (2, 3); (B, Y) -> (1, 1).

**Question 2:**
Consider the game from Question 1.
a) Is this a game of perfect or imperfect information? Explain.
b) Find the Subgame Perfect Nash Equilibrium (SPNE) using backward induction.
c) What is the SPNE outcome (payoffs)?

**Question 3:**
Explain the concept of an information set and why it is crucial for distinguishing between perfect and imperfect information games.

**Question 4:**
What is the key difference between a Nash Equilibrium and a Subgame Perfect Nash Equilibrium in extensive form games?

---

### 5. Answers to Practice Questions

**Answer 1:**

```
       (Player 1)
        /     \
       A       B
      /         \
   (5, 0)     (Player 2)
               /     \
              X       Y
             /         \
          (2, 3)       (1, 1)
```

**Answer 2:**
a) This is a game of **perfect information** because Player 2 knows Player 1's move (B) before making their own decision. Every player knows the complete history of play at every decision node.

b) **Backward Induction:**
    1.  **Player 2's decision (after P1 plays B):**
        *   If Player 2 chooses X, payoff is 3.
        *   If Player 2 chooses Y, payoff is 1.
        *   Player 2 chooses X to maximize their payoff (3 > 1).
    2.  **Player 1's decision (anticipating P2):**
        *   If Player 1 chooses A, payoff is 5.
        *   If Player 1 chooses B, they anticipate Player 2 choosing X, resulting in a payoff of 2 for Player 1.
        *   Player 1 chooses A to maximize their payoff (5 > 2).

    **SPNE Strategy Profile:**
    *   Player 1: A
    *   Player 2: X (if Player 1 plays B)

c) The SPNE outcome is (A, (B if reached: X)), resulting in **payoffs (5, 0)**.

**Answer 3:**
An **information set** for a player is a collection of decision nodes for that player such that the player cannot distinguish between any of the nodes in the set. All nodes in an information set must be associated with the same available actions for the player.
*   **Perfect Information Games:** In these games, every information set contains only a single node. This means that when a player makes a decision, they know exactly where they are in the game tree and the entire history of play.
*   **Imperfect Information Games:** In these games, at least one information set contains more than one node. This means a player might not know the complete history of play, and their decision must be consistent across all nodes within that information set, as they cannot differentiate between them. This is crucial for modeling scenarios where players act without complete knowledge of previous moves (e.g., simultaneous moves, actions of others being unobservable).

**Answer 4:**
*   **Nash Equilibrium (NE):** A strategy profile where no player can unilaterally deviate and improve their payoff, *assuming all other players stick to their strategies*. In extensive form games, NE can be found by converting to strategic form, but they might include non-credible threats.
*   **Subgame Perfect Nash Equilibrium (SPNE):** A refinement of NE that requires the strategy profile to be a Nash Equilibrium not only in the overall game but also in *every subgame*. This is typically found using backward induction for games of perfect information. SPNE eliminates strategy profiles that rely on threats or promises that a player would not rationally carry out if the situation actually arose, thus ensuring **credibility**.

---

### 6. Important Points to Remember

*   **Extensive form games capture sequential decision-making.**
*   **The game tree is the primary representation, with nodes, branches, and payoffs.**
*   **Information sets define what a player knows (or doesn't know) at a decision node.**
*   **Games of perfect information have only single-node information sets.**
*   **A player's strategy must specify an action for *every* information set they might encounter.**
*   **Backward induction is the standard method for finding SPNE in finite games of perfect information.**
*   **SPNE ensures that all threats and promises made within a strategy profile are credible.**
*   **CE concepts, to be discussed later, build upon the sequential nature and information structures of extensive form games.**
