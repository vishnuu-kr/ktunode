---
title: "perfect recall"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 2: Correlated equilibrium (CE) "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5c0"
status: "completed"
scrapedAt: "2026-05-20T17:06:36.880Z"
---
# Game Theory and Mechanism Design: Module 2 - Correlated Equilibrium (CE)

## Topic: Perfect Recall

### Learning Outcomes:

Upon successful completion of this topic, you will be able to:

*   Understand the concept of perfect recall in the context of extensive-form games.
*   Differentiate between perfect recall and imperfect recall.
*   Explain how perfect recall affects the decision-making process of players.
*   Analyze games with and without perfect recall.
*   Recognize the implications of perfect recall for information sets.
*   Apply the concept of perfect recall to the analysis of correlated equilibria in sequential games.

---

### 1. Introduction to Perfect Recall

**Perfect recall** is a fundamental assumption in game theory, particularly for analyzing **extensive-form games** (games played over time with sequential moves). It essentially means that players remember all the information they have previously received or acted upon throughout the game.

---

### 2. What is Perfect Recall?

A player has perfect recall if:

*   **They remember all past actions they have taken.**
*   **They remember all information they have received (including signals or observations).**
*   **They remember the consequences of their past actions and the information they received.**

In simpler terms, a player with perfect recall never "forgets" what happened in the past. Their current knowledge state is a cumulative history of their involvement in the game.

---

### 3. Information Sets and Perfect Recall

In extensive-form games, players' knowledge of the game's history is represented by **information sets**. An information set for a player is a collection of game states (nodes in the game tree) where the player cannot distinguish between them.

**Crucial link:** Perfect recall imposes a specific structure on information sets.

*   **With Perfect Recall:** If a player has perfect recall, then all nodes within a single information set must correspond to the same history *for that player*. This means a player cannot be uncertain about their own past actions or the signals they received that led them to different nodes.

*   **Without Perfect Recall:** If a player lacks perfect recall, their information sets can be structured in a way that their own past actions or received information are not consistently remembered.

---

### 4. Examples: Perfect Recall vs. Imperfect Recall

Let's illustrate with examples:

#### Example 1: Sequential Move Game (Perfect Recall)

Consider a simple two-player game:

1.  **Player 1** chooses either Left (L) or Right (R).
2.  If Player 1 chooses L, the game ends with payoffs (2,1).
3.  If Player 1 chooses R, then **Player 2** chooses either Up (U) or Down (D).
    *   If Player 2 chooses U, payoffs are (1,2).
    *   If Player 2 chooses D, payoffs are (3,0).

**Game Tree:**

```
       (Start)
         / \
        /   \
       L     R
      /       \
   (2,1)       (Node A)
                / \
               /   \
              U     D
             /       \
          (1,2)     (3,0)
```

*   **Player 1's decision at the start:** Player 1 knows it's the beginning of the game. They have perfect recall.
*   **Player 2's decision at Node A:** Node A is reached only if Player 1 chose R. Player 2 knows this. Player 2's information set is just {Node A}. Player 2 has perfect recall and remembers that Player 1 chose R.

#### Example 2: Imperfect Recall (Illustrative, not a standard game)

Imagine a scenario where a player is given a piece of information, then asked to choose an action, and then asked to recall the information they were given. If they forget, it's imperfect recall.

*   **Alice** is told "The coin is Heads" or "The coin is Tails".
*   Then, Alice chooses "Stay" or "Leave".
*   Then, Alice is asked, "What was the coin?"

If Alice sometimes answers "Heads" when she was told "Tails", or vice versa, she lacks perfect recall of the information she received. In game theory, this is modeled by allowing information sets to be "split" in a way that violates the player's ability to reconstruct their own history.

**More formally, in an extensive form game, a player $i$'s information sets $I_i$ satisfy perfect recall if for any two nodes $x, y \in I_i$ and any node $z$ on a path from the root to $x$, if the history of actions and observations from the root to $z$ is the same as the history from the root to $w$ (where $w$ is on a path from the root to $y$), then $z$ and $w$ must be the same node.**

This is a bit technical, but the intuition is that if a player is at two different points in the game that they cannot distinguish (i.e., they are in the same information set), then their entire past history leading to those points must be identical *from their perspective*.

---

### 5. Why is Perfect Recall Important?

*   **Foundation for Rationality:** Most solution concepts in game theory (like Nash Equilibrium, Subgame Perfect Nash Equilibrium) rely on players having perfect recall. It ensures that players are making decisions based on a consistent and complete understanding of the game's past.
*   **Simplifies Analysis:** Games with perfect recall are generally easier to analyze because players' strategies are well-defined functions of their past information.
*   **Bayesian Updating:** Perfect recall is crucial for Bayesian players who update their beliefs about the state of the world or other players' types using Bayes' rule. They need to remember the signals they received to perform this updating correctly.
*   **Correlated Equilibrium in Sequential Games:** When extending concepts like Correlated Equilibrium to sequential games, the assumption of perfect recall becomes important for understanding how players might condition their strategies on past information.

---

### 6. Perfect Recall and Correlated Equilibrium

While Correlated Equilibrium (CE) is primarily defined for normal-form games, its extension to extensive-form games involves how a device (like a mediator or a random signal) might suggest actions at different stages of the game.

**In sequential games, if a mechanism suggests actions to players at various information sets, perfect recall is essential for players to correctly interpret and follow these suggestions based on their actual history.**

*   **Following Suggestions:** If a player has perfect recall, they can correctly recall the suggestions they received at previous information sets and condition their current choice on this history, along with any other information they possess.
*   **Belief Formation:** Players with perfect recall can form consistent beliefs about the probability of being at different nodes within their information sets, given the mechanism's suggestions and their own past actions.

**Example:** Imagine a mediator who suggests actions to Player 1 and then, depending on Player 1's action, suggests an action to Player 2.

*   If Player 1 has perfect recall, they will remember the suggestion made to them.
*   If Player 2 has perfect recall, they will remember Player 1's action (which they might observe) and any suggestion made to Player 2.

A lack of perfect recall would make the mediator's job much harder, as players might not consistently follow or remember the suggested paths.

---

### 7. Key Concepts and Definitions Recap

*   **Extensive-Form Game:** A game represented by a game tree, detailing players, moves, information, and payoffs.
*   **Information Set:** A collection of nodes in a game tree where a player cannot distinguish between them.
*   **Perfect Recall:** A player remembers all their past actions and all information they have received.
*   **Imperfect Recall:** A player can "forget" their past actions or the information they received, leading to different information set structures.

---

### 8. Important Points to Remember

*   **Perfect recall is about remembering your own past actions and information.**
*   It's a standard assumption in most extensive-form game analyses.
*   It directly impacts the structure of information sets, requiring all nodes within an information set to represent an identical history for that player.
*   Without perfect recall, players' strategies might be dependent on states they cannot distinguish from their own perspective, which is generally considered less "natural" or harder to model.
*   It's a prerequisite for many advanced solution concepts and for applying Bayesian reasoning.

---

### 9. Practice Questions

**Question 1:**
Define perfect recall in the context of extensive-form games.

**Question 2:**
How does perfect recall influence the structure of a player's information sets?

**Question 3:**
Consider a game where Player 1 chooses an action, and then (regardless of Player 1's action) Player 2 chooses an action. Player 1 observes Player 2's action.
*   If Player 1 has perfect recall, can Player 1 have an information set containing a node where they chose 'L' and a node where they chose 'R'? Explain why or why not.

**Question 4:**
Briefly explain why perfect recall is important for concepts like Bayesian updating in sequential games.

---

### 10. Answers to Practice Questions

**Answer 1:**
Perfect recall means a player remembers all their past actions and all information they have received throughout the game. This implies that if a player is at two different nodes in the game tree that they cannot distinguish (i.e., within the same information set), their history of actions and information received leading to those nodes must be identical.

**Answer 2:**
Perfect recall requires that all nodes within a player's information set must correspond to the same sequence of actions and information received by that player. In essence, a player cannot be in an information set where, for some nodes, they took action A, and for others, they took action B, if those actions are distinguishable.

**Answer 3:**
No. If Player 1 has perfect recall, they cannot have an information set containing a node where they chose 'L' and a node where they chose 'R'. This is because choosing 'L' and choosing 'R' are distinct actions, and Player 1 would remember which action they took. If they could not distinguish between a game history where they chose 'L' and one where they chose 'R', they would lack perfect recall. Therefore, these two nodes would belong to separate information sets for Player 1.

**Answer 4:**
Perfect recall is crucial for Bayesian updating because it ensures players can correctly remember the signals they received. When a player updates their beliefs about the state of the world or other players' types using Bayes' rule, they need to know the specific historical signals to condition their updated beliefs upon. Without perfect recall, a player might not remember the relevant signals, making accurate Bayesian updating impossible.
