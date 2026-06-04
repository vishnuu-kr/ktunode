---
title: "Equilibrium in IIEFG"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 2: Correlated equilibrium (CE) "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5c1"
status: "completed"
scrapedAt: "2026-05-20T17:06:37.577Z"
---
# Game Theory and Mechanism Design: Module 2 - Correlated Equilibrium (CE)

## Topic: Equilibrium in IIEFG

### Introduction to Extensive-Form Games with Imperfect Information (IIEFG)

Extensive-form games are a powerful way to model sequential decision-making. When players have **imperfect information**, it means they do not know the exact state of the game or the actions taken by other players at certain points. This is typically modeled using **information sets**.

**Key Concepts:**

*   **Extensive Form Game:** A game represented by a game tree, where nodes represent states of the world and branches represent actions.
*   **Imperfect Information:** A player does not know the full history of play leading up to their decision node.
*   **Information Set:** A collection of decision nodes for a single player such that the player cannot distinguish between them. All nodes within an information set must be for the same player, and they must have the same set of available actions.
*   **Perfect Recall:** A player remembers all the information they have received throughout the game. Most standard IIEFG assume perfect recall.
*   **Beliefs:** A probability distribution over the nodes within an information set, representing a player's subjective belief about which node they are currently at.

### Equilibrium Concepts in IIEFG

While Nash Equilibrium (NE) is a fundamental concept in normal-form games, it needs to be adapted for extensive-form games, especially those with imperfect information. The primary equilibrium concept for IIEFG is **Sequential Equilibrium (SE)**.

#### 1. Sequential Equilibrium (SE)

Sequential Equilibrium is a refinement of Nash Equilibrium that is particularly well-suited for extensive-form games with imperfect information. It addresses the potential for non-credible threats that can arise in sequential games.

**Definition of Sequential Equilibrium:**

A strategy profile $\sigma = (\sigma_1, ..., \sigma_n)$ and a system of beliefs $\mu = (\mu_1, ..., \mu_n)$ constitute a Sequential Equilibrium if they satisfy two conditions:

1.  **Sequential Rationality:** For every player $i$ and for every information set $h$ where player $i$ must move, the strategy $\sigma_i$ specifies an action $a_i^*$ at $h$ that maximizes player $i$'s expected payoff, *given the beliefs $\mu_i$ at $h$ and the strategies $\sigma_{-i}$ of the other players*.

    *   Mathematically: For all $a \in A_i(h)$,
        $E_{a_i^*, \sigma_{-i}} [u_i(\sigma) | h, \mu_i(h)] \ge E_{a_i, \sigma_{-i}} [u_i(\sigma) | h, \mu_i(h)]$
        where $E_{a_i^*, \sigma_{-i}} [u_i(\sigma) | h, \mu_i(h)]$ is the expected utility of player $i$ if they play $a_i^*$ at information set $h$, and other players play according to $\sigma_{-i}$, given the beliefs $\mu_i$ at $h$.

2.  **Consistency of Beliefs:** The beliefs $\mu_i$ must be consistent with the strategies $\sigma$ in a specific way. For any information set $h$, the beliefs $\mu_i(h)$ must be derived from an *initial probability distribution over all possible game histories* and the strategies $\sigma$ using **Bayes' Rule**, whenever possible.

    *   More formally: Let $\pi(s)$ be the probability of reaching a terminal node $s$ given the strategy profile $\sigma$. For an information set $h$, let $H(h)$ be the set of nodes in $h$. If $\sum_{x \in H(h)} \pi(x) > 0$ (i.e., the information set $h$ is on the equilibrium path), then the belief system $\mu_i$ must assign to each node $x \in H(h)$ a probability $\mu_i(x)$ such that:
        $\mu_i(x) = \frac{\pi(x)}{\sum_{y \in H(h)} \pi(y)}$
    *   If an information set $h$ is off the equilibrium path (i.e., $\sum_{x \in H(h)} \pi(x) = 0$), then the beliefs $\mu_i(h)$ can be *any* probability distribution over the nodes in $h$. This is where the "refinement" aspect of SE comes into play, as different choices of off-path beliefs can lead to different SE.

#### 2. Connection to Correlated Equilibrium (CE)

Correlated Equilibrium is a solution concept that generalizes Nash Equilibrium. In a CE, players receive recommendations from a mediator, and they find it optimal to follow these recommendations, given that others also follow theirs. The recommendations can be correlated.

**How does CE relate to IIEFG?**

While Correlated Equilibrium is typically defined for normal-form games, the idea of correlated signals can be extended to provide a framework for understanding certain types of equilibria in IIEFG, particularly when a **mediator** or **common signal** is involved.

*   **Mediator and Information Sets:** Imagine a mediator who recommends actions to players. If the mediator's recommendations are correlated, and players have imperfect information, they might update their beliefs based on the information they receive (both from the mediator and their own observations in the game).
*   **Common Information:** If players receive some common (but potentially incomplete) information before or during the game, this common information can act as a correlated signal. Their beliefs and strategies can then be conditioned on this common information, leading to outcomes that are supported by a CE.

**Example of CE in an IIEFG Context (Illustrative):**

Consider a simple IIEFG where Player 1 can choose to Invest or Not Invest. If Player 1 Invests, Player 2 observes this action. If Player 1 does not Invest, Player 2 does not observe Player 1's action (creating an information set for Player 2).

Let's say there's an external signal that is correlated with Player 1's action and also provides some information to Player 2.

*   **Signal States:** High (H) or Low (L).
*   **Correlations:**
    *   If Player 1 Invests, Signal is H with probability 0.8, L with probability 0.2.
    *   If Player 1 Does Not Invest, Signal is L with probability 0.9, H with probability 0.1.
*   **Player 1's Strategy:** Player 1 chooses to Invest or Not Invest.
*   **Player 2's Information:** Player 2 observes Player 1's action IF Player 1 Invests. If Player 1 does Not Invest, Player 2 does NOT observe the action but DOES receive the signal (H or L).

If we consider a strategy where Player 1 Invests if the signal is H, and Does Not Invest if the signal is L, and Player 2 plays optimally based on their information (action observed or signal received), this could be supported by a correlated strategy profile.

**Important Note:** The direct application of Correlated Equilibrium (as typically defined for normal-form games) to IIEFG is not as straightforward as Nash Equilibrium or Sequential Equilibrium. However, the *underlying idea* of correlated signals influencing player behavior and beliefs is relevant. CE provides a lens to analyze games where players' decisions are coordinated or influenced by a common, potentially imperfect, information source.

### Refining Sequential Equilibrium: Perfect Bayesian Equilibrium (PBE)

While SE is powerful, the freedom in specifying off-path beliefs can lead to too many equilibria. **Perfect Bayesian Equilibrium (PBE)** is a more stringent refinement that further constrains beliefs.

**Definition of Perfect Bayesian Equilibrium:**

A strategy profile $\sigma = (\sigma_1, ..., \sigma_n)$ and a system of beliefs $\mu = (\mu_1, ..., \mu_n)$ constitute a Perfect Bayesian Equilibrium if they satisfy:

1.  **Sequential Rationality (Same as SE):** For every player $i$ and for every information set $h$ where player $i$ must move, the strategy $\sigma_i$ specifies an action $a_i^*$ at $h$ that maximizes player $i$'s expected payoff, *given the beliefs $\mu_i$ at $h$ and the strategies $\sigma_{-i}$ of the other players*.

2.  **Belief Consistency (Bayes' Rule on Path):** For any information set $h$ that is **on the equilibrium path** (i.e., the probability of reaching $h$ under $\sigma$ is strictly positive), the beliefs $\mu_i(h)$ must be derived from an initial probability distribution over all possible game histories and the strategies $\sigma$ using **Bayes' Rule**.

    *   This is the same as the consistency condition for SE when information sets are on the equilibrium path.

3.  **Belief Consistency (Off-Path Beliefs):** For any information set $h$ that is **off the equilibrium path** (i.e., the probability of reaching $h$ under $\sigma$ is zero), the beliefs $\mu_i(h)$ are not constrained by Bayes' Rule. However, PBE requires that these off-path beliefs are **"reasonable"** in some sense. The exact definition of "reasonable" can vary, but a common approach is to assume that these off-path beliefs are derived from some hypothetical "perturbation" of the equilibrium strategies.

    *   **Forward Induction:** A common interpretation of "reasonable" off-path beliefs is that they are consistent with players playing optimally in the future, given the beliefs. This often leads to PBEs that satisfy forward induction.
    *   **"Signaling Games" and PBE:** PBE is particularly important in signaling games, where a player (the sender) takes an action to convey information to another player (the receiver). The receiver's beliefs about the sender's type are crucial.

#### Why PBE is a Refinement Over SE

PBE is generally considered a stronger concept than SE because it places more discipline on off-path beliefs, often requiring them to be supportable by some underlying reasoning about how players might deviate. However, SE is still useful as a foundational concept.

### Learning Outcomes Checklist & Summary

Let's ensure we've covered the learning outcomes implicitly requested by the topic "Equilibrium in IIEFG" from Module 2: Correlated Equilibrium.

*   **Understanding of IIEFG:** We've defined key terms like information sets and beliefs.
*   **Equilibrium Concepts for IIEFG:**
    *   **Sequential Equilibrium (SE):** Definition, sequential rationality, consistency of beliefs (on and off path).
    *   **Perfect Bayesian Equilibrium (PBE):** Definition, how it refines SE, importance of beliefs, especially off-path.
*   **Connection to Correlated Equilibrium (CE):** While not a direct application, we discussed how the idea of correlated signals and mediators can inform our understanding of equilibria in IIEFG, especially in scenarios with common information. The core idea is that correlated signals can influence beliefs and thus equilibrium outcomes.
*   **Key Differences/Relationships:** SE and PBE are the primary equilibria for IIEFG. CE is a concept for normal-form games, but its underlying mechanisms (correlated signals) can be relevant in specific IIEFG contexts. PBE is a refinement of SE.

### Important Points to Remember

*   **Imperfect Information is Key:** The presence of information sets fundamentally changes how we define and find equilibria compared to games with perfect information.
*   **Beliefs Matter:** In IIEFG, players' beliefs about where they are in an information set are critical to their decision-making.
*   **Credibility of Threats:** Sequential rationality ensures that threats made are optimal to carry out, given beliefs.
*   **Off-Path Beliefs are Tricky:** The specification of beliefs for information sets that are not reached under the equilibrium strategies is a major challenge and a source of different equilibrium refinements.
*   **PBE as a Refinement:** PBE imposes stronger conditions on beliefs than SE, often leading to more plausible outcomes.
*   **CE and IIEFG:** Think of CE in IIEFG not as a direct replacement for SE/PBE, but as a way to analyze scenarios where external correlated signals influence player behavior and beliefs within the sequential decision-making process.

---

### Practice Questions & Exercises

**Question 1 (Conceptual):**

Explain the two core conditions that must be satisfied for a strategy profile and a system of beliefs to constitute a Sequential Equilibrium (SE) in an extensive-form game with imperfect information.

**Answer 1:**

A strategy profile $\sigma$ and a system of beliefs $\mu$ form a Sequential Equilibrium if:

1.  **Sequential Rationality:** For every player $i$ and every information set $h$ where player $i$ moves, player $i$'s strategy $\sigma_i$ prescribes an action at $h$ that maximizes their expected utility, given their beliefs $\mu_i(h)$ at $h$ and the strategies $\sigma_{-i}$ of the other players.
2.  **Consistency of Beliefs:** For any information set $h$ that is reached with positive probability under the strategy profile $\sigma$, the beliefs $\mu_i(h)$ must be derived from some initial probability distribution over game histories and the strategy profile $\sigma$ using Bayes' Rule. For information sets off the equilibrium path, beliefs can be arbitrary.

**Question 2 (Comparison):**

What is the main difference between Sequential Equilibrium (SE) and Perfect Bayesian Equilibrium (PBE) concerning beliefs off the equilibrium path?

**Answer 2:**

The main difference lies in the treatment of beliefs for information sets that are off the equilibrium path.

*   In **Sequential Equilibrium (SE)**, beliefs for off-path information sets can be *any* probability distribution.
*   In **Perfect Bayesian Equilibrium (PBE)**, beliefs for off-path information sets are also not directly determined by Bayes' Rule, but they are generally required to be "reasonable" or supportable by some hypothetical deviations or perturbations of the equilibrium strategies. PBE thus imposes more structure on off-path beliefs than SE.

**Question 3 (Application - Scenario):**

Consider a simplified medical diagnosis game.
*   **Player 1 (Doctor):** Knows the patient's general symptoms but is uncertain about the specific disease.
*   **Patient's True State:** Disease A or Disease B.
*   **Doctor's Actions:** Order Test 1 or Order Test 2.
*   **Information:** Test 1 results are ambiguous for Disease B. Test 2 results are ambiguous for Disease A. The doctor knows this.
*   **Player 2 (Patient):** Receives a diagnosis from the doctor and decides whether to Trust or Distrust the doctor's recommendation.

Suppose the doctor has a belief about the probability of Disease B. The doctor chooses a test strategy. The patient observes the doctor's *recommendation* (which test was ordered) but not necessarily the doctor's underlying belief or the patient's true state of disease.

How might the concept of Correlated Equilibrium (CE) be tangentially relevant here?

**Answer 3:**

While this is an IIEFG that would typically be analyzed with SE or PBE, CE could be relevant if we introduce an external **common signal** or a **mediator**.

For example, imagine a public health announcement that is correlated with the prevalence of Disease B in the population. This announcement acts as a common signal for both the doctor and the patient (though the patient might not see the doctor's internal thought process).

*   The doctor's decision on which test to recommend might be influenced by this public health announcement (e.g., if the announcement suggests higher prevalence of Disease B, the doctor might lean towards Test 1).
*   The patient, upon receiving the doctor's recommendation, might also consider this public health announcement when deciding whether to trust the doctor.

In this scenario, the public health announcement serves as a correlated signal. The equilibrium outcome where the doctor recommends a test and the patient decides to trust, based on both the recommendation and their awareness of the public announcement, could potentially be described or supported by a correlated strategy profile, analogous to how CE operates in normal-form games. The announcement coordinates their expectations and actions in a way that might not be achievable with independent strategies.

**Question 4 (Definition):**

What is "sequential rationality" in the context of Sequential Equilibrium for IIEFG?

**Answer 4:**

"Sequential rationality" in Sequential Equilibrium means that at every information set where a player must make a decision, that player chooses an action that maximizes their expected payoff, assuming that all future actions by all players will also be sequentially rational, and given the player's current beliefs about which node they are at within that information set. It essentially requires optimal play at every possible decision point, conditional on the beliefs held at that point.

---
This concludes the study notes for "Equilibrium in IIEFG" from Module 2 on Correlated Equilibrium. Remember that while CE itself is for normal-form games, understanding its principles of correlated signals can offer insights into complex sequential interactions with imperfect information.
