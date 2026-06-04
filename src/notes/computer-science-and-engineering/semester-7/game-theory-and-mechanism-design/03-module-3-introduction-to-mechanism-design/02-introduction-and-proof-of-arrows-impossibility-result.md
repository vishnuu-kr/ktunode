---
title: "introduction and proof of Arrow’s impossibility result"
subject: "GAME THEORY AND MECHANISM DESIGN"
module: "Module 3: Introduction to mechanism design "
branch: "Computer Science and Engineering"
semester: 7
topicId: "684162790fc9aa1fdbc8c5c7"
status: "completed"
scrapedAt: "2026-05-20T17:06:41.003Z"
---
# Game Theory and Mechanism Design - Module 3: Introduction to Mechanism Design

## Topic: Introduction and Proof of Arrow's Impossibility Result

---

### 1. Introduction to Mechanism Design

**1.1 What is Mechanism Design?**

*   **Definition:** Mechanism design is the art and science of designing the "rules of the game" (mechanisms) to achieve desired outcomes, given the strategic behavior of participants (agents).
*   **Key Idea:** Instead of predicting behavior within a given structure, mechanism design *designs* the structure to elicit the desired behavior.
*   **Contrast with Game Theory:**
    *   **Game Theory:** Analyzes strategic interactions *given* a set of rules. Predicts outcomes.
    *   **Mechanism Design:** Designs the rules to *achieve* a desired outcome, anticipating strategic behavior.
*   **Core Components of a Mechanism:**
    *   **Agents:** Individuals or entities participating in the mechanism.
    *   **Preferences/Types:** What each agent values or desires.
    *   **Actions/Strategies:** What agents can do within the mechanism.
    *   **Information:** What agents know about each other and the mechanism.
    *   **Outcome Function:** How agents' actions determine the final outcome.
    *   **Payment Function:** How agents are compensated or pay based on their actions and the outcome (often crucial in economic mechanisms).

**1.2 Applications of Mechanism Design:**

*   **Economics:**
    *   **Auctions:** Designing rules for selling goods to maximize revenue or social welfare.
    *   **Market Design:** Creating markets for complex goods (e.g., kidney transplants, school choice, spectrum auctions).
    *   **Public Goods Provision:** Determining how to fund or allocate shared resources.
*   **Political Science:**
    *   **Voting Systems:** Designing rules for aggregating individual preferences into a collective decision.
    *   **Legislative Procedures:** Structuring debates and voting to achieve policy goals.
*   **Computer Science:**
    *   **Distributed Systems:** Designing protocols for agents to cooperate or compete.
    *   **Resource Allocation:** Allocating bandwidth, computational power, etc.

**1.3 Desired Properties of Mechanisms:**

When designing a mechanism, we often aim for certain desirable properties:

*   **Incentive Compatibility:** Agents should find it in their best interest to report their true preferences or take their optimal actions, regardless of what others do.
    *   *Dominant Strategy Incentive Compatibility (DSIC):* Reporting truthfully is always the best strategy for an agent, irrespective of other agents' strategies.
    *   *Bayes-Nash Incentive Compatibility (BNIC):* Reporting truthfully is the best strategy on average, given beliefs about other agents' types.
*   **Individual Rationality (IR):** Each agent should receive a payoff at least as good as their reservation utility (e.g., not participating).
*   **Group Rationality/Efficiency:** The mechanism should lead to an outcome that is "good" for the group, often meaning maximizing social welfare (the sum of utilities) or achieving Pareto efficiency.
*   **Budget Balance:** In mechanisms involving payments, the total payments collected should equal the total payments distributed.
*   **Envy-Freeness:** No agent should prefer another agent's allocation or outcome.

---

### 2. Arrow's Impossibility Result: Introduction

**2.1 The Problem of Social Choice**

*   **Goal:** To aggregate individual preferences into a single collective preference or decision for a society.
*   **Challenge:** How can we do this in a fair and rational way that respects individual choices and avoids paradoxes?
*   **Example:** Imagine a group of people choosing a restaurant. Each person has their own ranking of restaurants. How do we pick one restaurant that represents the group's overall preference?

**2.2 Kenneth Arrow's Contribution**

*   **Nobel Laureate:** Kenneth Arrow, in his seminal 1951 work "Social Choice and Individual Values," provided a rigorous mathematical framework for analyzing social choice and famously proved an impossibility result.
*   **The Question:** Can we design a voting system (a social choice mechanism) that satisfies a set of seemingly reasonable criteria for aggregating individual preferences into a social preference ordering?

**2.3 Key Concepts and Definitions for Arrow's Theorem**

*   **Individuals (Agents):** A set of $n \ge 2$ individuals.
*   **Alternatives (Outcomes):** A set of $m \ge 3$ distinct alternatives to be ranked.
*   **Individual Preference Relation ($R_i$):** For each individual $i$, a complete and transitive ordering of the alternatives.
    *   *Complete:* For any two alternatives $x$ and $y$, $i$ either prefers $x$ to $y$ ($x P_i y$) or is indifferent to $x$ and $y$ ($x I_i y$).
    *   *Transitive:* If $x$ is preferred to $y$ ($x P_i y$) and $y$ is preferred to $z$ ($y P_i z$), then $x$ is preferred to $z$ ($x P_i z$). (Indifference can also be transitive).
*   **Social Preference Relation ($R$):** A collective ordering of the alternatives that represents the "will of the society." This relation must also be complete and transitive.
*   **Social Welfare Function (SWF):** A function that maps a set of individual preference orderings $\{R_1, R_2, \ldots, R_n\}$ to a social preference ordering $R$.

**2.4 The Five Conditions (Axioms) for a Social Welfare Function**

Arrow identified five desirable properties that a "fair" social welfare function should satisfy. Let's assume at least two individuals ($n \ge 2$) and at least three alternatives ($m \ge 3$).

1.  **Unrestricted Domain (U):** The SWF must be able to aggregate any logically possible set of individual preference orderings. There should be no restrictions on what individuals can prefer.
    *   *Intuition:* We should be able to handle all possible ways people might rank alternatives.

2.  **Non-Dictatorship (ND):** There is no single individual whose preferences are always imposed on the society, regardless of the preferences of others.
    *   *Intuition:* No single person should have absolute power to dictate the social outcome.

3.  **Pareto Efficiency (or Unanimity) (PE):** If every individual prefers alternative $x$ to alternative $y$, then the society must also prefer $x$ to $y$.
    *   *Intuition:* If everyone agrees that $x$ is better than $y$, the collective decision should reflect this agreement.

4.  **Independence of Irrelevant Alternatives (IIA) (or Independence of Other Preferences) (IIA):** The social ranking of any two alternatives $x$ and $y$ depends only on the individual rankings of $x$ and $y$, and not on how individuals rank any other alternative $z$.
    *   *Intuition:* If we add or remove a third option, the social preference between $x$ and $y$ should not change if everyone's relative ranking of $x$ and $y$ remains the same.

5.  **Transitivity of Social Choice (from the definition of $R$):** The social preference relation must be transitive. If $x$ is socially preferred to $y$, and $y$ is socially preferred to $z$, then $x$ must be socially preferred to $z$.
    *   *This is often considered a foundational requirement for rational collective decision-making, rather than an additional condition to be satisfied by the SWF itself. However, Arrow proved that if a SWF satisfies U, ND, PE, and IIA, it *must* be transitive.*

**2.5 The Impossibility Result**

Arrow's Impossibility Theorem states:

**For any society with at least two individuals and at least three alternatives, it is impossible to design a social welfare function that satisfies all five conditions: Unrestricted Domain, Non-Dictatorship, Pareto Efficiency, and Independence of Irrelevant Alternatives.**

In simpler terms: **Any voting system that aims to be fair and democratic will inevitably violate at least one of these fundamental principles.**

---

### 3. Proof of Arrow's Impossibility Result (Sketch)

The full proof is quite involved, but we can outline the core ideas and demonstrate how the conditions can lead to contradictions. The general strategy is to show that if you assume all conditions hold, you eventually reach a contradiction.

**Proof Strategy: Assume all conditions hold and derive a contradiction.**

**Key Idea:** We will show that if a SWF satisfies U, ND, PE, and IIA, it must either be dictatorial or violate transitivity or unanimity. The proof often works by constructing a "winning coalition" or identifying a potential dictator.

**Let's denote:**
*   $x P y$ : $x$ is strictly preferred to $y$.
*   $x R y$ : $x$ is weakly preferred to $y$ (i.e., $x P y$ or $x I y$).
*   $x \to y$ : $x$ is socially preferred to $y$ (i.e., $x R y$ and not $y P x$).
*   $x \leftrightarrow y$ : $x$ is socially indifferent to $y$ (i.e., $x R y$ and $y R x$).

**Proof Sketch using a specific preference profile and showing a contradiction with IIA:**

Consider three alternatives: A, B, C.
Consider three individuals: 1, 2, 3.

**Step 1: Construct a Social Welfare Function based on U, ND, PE, IIA.**

Let's try to build a SWF. We'll see it leads to problems.

**Step 2: Find a "Crucial" Individual and a "Crucial" Preference profile.**

The proof often relies on finding a situation where one individual's preference change *could* lead to a change in the social outcome, hinting at dictatorship.

Let's assume we have a social welfare function $F$ that satisfies U, ND, PE, and IIA.

**Consider the following preference profile:**

*   **Individual 1:** A > B > C
*   **Individual 2:** B > C > A
*   **Individual 3:** C > A > B

*Note: This is just one profile. Unrestricted Domain means we must consider ALL profiles.*

**Step 3: Analyze a Specific Case where a Dictator Might Emerge.**

Let's focus on the social preference between A and B.

**Scenario 1: Suppose the SWF ranks A socially preferred to B (A R B) for this profile.**

*   **Assumption:** $A \to B$.
*   **By PE:** If everyone preferred A to B, then $A \to B$. This profile doesn't satisfy this.
*   **By ND:** No single person dictates.

**Now, let's change only ONE person's preferences to see if IIA holds.**

**Consider a slight modification of Individual 1's preferences, keeping other preferences the same.**

*   **Individual 1:** A > C > B  *(Changed B and C order for Ind 1)*
*   **Individual 2:** B > C > A
*   **Individual 3:** C > A > B

**Crucially, the *relative* ranking of A and B for Individual 1 is still A > B.** The only thing that changed for Individual 1 is their ranking of C relative to A and B.

**Step 4: Apply IIA.**

According to IIA, the social ranking of A and B should remain the same because the individual rankings of A and B have not changed. If we assumed $A \to B$ in Scenario 1, we must still have $A \to B$ in Scenario 2.

**Step 5: Identify the Contradiction (or Dictatorship).**

The proof often proceeds by showing that by manipulating preferences around specific pairs (like A vs. B, B vs. C, C vs. A), you can isolate a condition that forces a particular individual's preferences to dominate.

**A more common way to illustrate the essence of the proof:**

Imagine we're checking for a dictator. Let's consider an arbitrary pair of alternatives, $x$ and $y$, and an arbitrary individual $k$.

1.  **Construct a profile where individual $k$ ranks $x$ above $y$ ($x P_k y$), and everyone else ranks $y$ above $x$ ($y P_i x$ for $i \ne k$).**
2.  **If the SWF satisfies PE (unanimity), and if *everyone* preferred $x$ to $y$, then $x$ must be socially preferred to $y$.**
3.  **Now, adjust the preferences of *all other individuals* ($i \ne k$) so that they now rank $x$ above $y$ ($x P_i y$).**
4.  **According to IIA, the social ranking of $x$ and $y$ should only depend on individual rankings of $x$ and $y$.**
5.  **If the SWF satisfies PE, and now everyone ranks $x$ above $y$, the social outcome *must* be $x R y$.**
6.  **The proof then shows that for these conditions to hold consistently across all pairs and for all individuals, at least one individual's preferences must *always* determine the social outcome for certain pairs, making them a dictator.**

**Let's use a simplified example demonstrating the conflict between IIA and other conditions.**

Consider three alternatives {A, B, C} and three voters {1, 2, 3}.

**Profile 1:**
*   1: A > B > C
*   2: B > C > A
*   3: C > A > B

Let's assume a SWF satisfies PE and ND. What could the social ordering be?

*   **A vs B:**
    *   1: A > B
    *   2: B > A
    *   3: A > B
    *   (2 out of 3 prefer A to B). If we assume a simple majority rule for strict preferences (ignoring indifference for simplicity), then $A \to B$.
*   **B vs C:**
    *   1: B > C
    *   2: B > C
    *   3: C > B
    *   (2 out of 3 prefer B to C). So, $B \to C$.
*   **C vs A:**
    *   1: C > A (if they rank C last, B second, A first) - wait, let's check Indiv preferences again:
        *   1: A > B > C
        *   2: B > C > A
        *   3: C > A > B
    *   **Correcting C vs A:**
        *   1: A > C (A is preferred to C)
        *   2: C > A (C is preferred to A)
        *   3: A > C (A is preferred to C)
        *   (2 out of 3 prefer A to C). So, $A \to C$.

**So, for Profile 1, a majority rule SWF would yield: A → B, B → C, A → C.** This is transitive and satisfies PE and ND.

**Now, let's introduce a new alternative, D, and change some preferences to see how IIA works.**

**Profile 2:**
*   1: A > D > B > C
*   2: B > C > D > A
*   3: C > D > A > B

**Consider the social ranking of A and B:**

*   **Individual 1:** A > B (still A > B)
*   **Individual 2:** B > A (still B > A)
*   **Individual 3:** A > B (was C > A > B, now C > D > A > B, so A is still preferred to B)

**The critical observation for IIA is how the introduction of D changes *relative* rankings of A and B.**
In Profile 1, for Ind 3: C > A > B. So A is preferred to B.
In Profile 2, for Ind 3: C > D > A > B. So A is still preferred to B.

*   **Individual 1's ranking of A vs B:** A > B (unchanged)
*   **Individual 2's ranking of A vs B:** B > A (unchanged)
*   **Individual 3's ranking of A vs B:** A > B (unchanged relative ranking, even though D is inserted)

**If the SWF is indeed majority rule, then the social outcome for A vs B should remain the same as in Profile 1.**
In Profile 1, we had $A \to B$ (based on 2/3 majority).
Therefore, by IIA, we should still have $A \to B$ in Profile 2.

**The problem arises when we apply this consistently to all pairs, and it turns out that to satisfy IIA, you often need a dictator.**

**Consider a specific case that highlights the conflict with IIA:**

*   **Alternatives:** {A, B, C}
*   **Individuals:** {1, 2}
*   **Profile:**
    *   1: A > B > C
    *   2: B > C > A

*   **A vs B:** 1 prefers A, 2 prefers B. Assume a tie or rule out pure majority rule for strict preferences in a small group for a moment, and consider another axiom: Pareto Efficiency.
*   **B vs C:** 1 prefers B, 2 prefers B. By PE (unanimity), B > C.
*   **C vs A:** 1 prefers C, 2 prefers C. By PE (unanimity), C > A.

**This leads to a social ordering:** B > C, C > A. By transitivity, B > A.
But from A vs B, we had a conflict.

**Let's use a setup where two individuals can create a dictator scenario with IIA.**

*   **Alternatives:** {A, B, C}
*   **Individuals:** {1, 2}
*   **Profile 1:**
    *   1: A > B > C
    *   2: A > C > B

    *   **A vs B:** 1: A, 2: A. PE implies $A \to B$.
    *   **B vs C:** 1: B, 2: C. Let's say 1's preference dominates for this pair for some reason (e.g. not majority rule). So, $B \to C$.
    *   **C vs A:** 1: A, 2: A. PE implies $A \to C$.
    *   Result: $A \to B$, $B \to C$, $A \to C$. This is transitive and satisfies PE.

*   **Profile 2 (change Ind 2's ranking of B and C, keeping A first):**
    *   1: A > B > C
    *   2: A > B > C

    *   Now everyone prefers A to B, B to C, and A to C. PE implies: $A \to B$, $B \to C$, $A \to C$.

**Now, let's consider another modification that stresses IIA.**

*   **Profile 3 (change Ind 2's ranking of A and C, but keep A first):**
    *   1: A > B > C
    *   2: A > C > B  (This is the same as Profile 1)

    *   We had A > B socially.

*   **Profile 4 (change Ind 1's ranking of B and C, keeping A first):**
    *   1: A > C > B
    *   2: A > C > B

    *   **A vs B:** 1: A, 2: A. PE implies $A \to B$.
    *   **B vs C:** 1: C, 2: C. PE implies $C \to B$.
    *   **C vs A:** 1: A, 2: A. PE implies $A \to C$.
    *   Result: $A \to B$, $C \to B$, $A \to C$. This is transitive.

Now, let's focus on the social choice between B and C.
In Profile 1: $B \to C$.
In Profile 4: $C \to B$.

*   **Individual 1's relative ranking of B and C:**
    *   Profile 1: B > C
    *   Profile 4: C > B
    *   **This relative ranking changed.**

*   **Individual 2's relative ranking of B and C:**
    *   Profile 1: C > B
    *   Profile 4: C > B
    *   **This relative ranking did NOT change.**

If we assume Individual 1 is NOT a dictator, then the change in their preferences *alone* should not be able to flip the social outcome of B vs C if other conditions are met. However, if IIA holds, the social choice between B and C should depend only on how individuals rank B and C.

The proof gets deep into showing that if IIA is to hold, and you want to avoid dictatorship and maintain transitivity and unanimity, you'll run into contradictions. A key step often involves identifying a "decisive" coalition for a pair of alternatives, and then showing how IIA forces this coalition to be decisive for *all* pairs, thus revealing a dictator.

**Simplified Takeaway of Proof Logic:**

1.  Assume a SWF exists that satisfies U, ND, PE, and IIA.
2.  Show that PE and U imply that for any pair (x, y), if all individuals rank x above y, then society ranks x above y.
3.  Use IIA to show that the social ranking of (x, y) depends *only* on individual rankings of (x, y).
4.  By cleverly constructing preference profiles and modifying them slightly (while respecting IIA), one can demonstrate that there must be an individual whose preferences *always* align with the social outcome for certain pairs, irrespective of others' preferences. This individual is the dictator.
5.  Since ND requires no dictator, this creates a contradiction. Therefore, no such SWF can exist.

---

### 4. Implications and Violations

**4.1 What Arrow's Theorem Means:**

*   **No Perfect Voting System:** There is no voting system that can satisfy all the criteria we intuitively deem "fair" and "democratic" simultaneously.
*   **Trade-offs are Necessary:** Any real-world voting system or social choice mechanism must compromise on at least one of Arrow's conditions.
*   **Understanding Limitations:** It highlights the inherent difficulties in aggregating diverse individual preferences into a coherent collective decision.

**4.2 How Different Voting Systems Violate Arrow's Conditions:**

*   **Dictatorship:** A system where one person's vote always counts more than others. Obviously violates ND. (e.g., Monarchy).
*   **Majority Rule (Simple):**
    *   **Transitivity:** Can fail (Condorcet Paradox). If A beats B, B beats C, but C beats A in pairwise majority votes, transitivity is violated.
    *   **IIA:** Can be violated by strategic voting or "insincere" voting. The outcome between A and B might change if a voter changes their ranking of C, especially if C is irrelevant to their A/B choice.
*   **Plurality Voting (First Past the Post):**
    *   **IIA:** Often violated. A "spoiler" candidate can change the outcome. If a voter prefers A to B, but B to C, and the choice is between A and B, they might vote for A. If C is introduced and is very similar to A, voters who like A might switch to C, making B win, even though the voters' relative preference of A vs B hasn't changed.
    *   **Transitivity:** Not directly violated by the mechanism itself, but the outcome might not reflect a transitive social preference due to strategic voting.
*   **Borda Count:**
    *   **IIA:** Violates IIA. Introducing or removing an alternative can change the social ranking between two existing alternatives.
    *   **ND, U, Transitivity:** Generally satisfied.
*   **Ranked-Choice Voting (Instant Runoff Voting):**
    *   **IIA:** Can violate IIA. The elimination of a candidate can change the outcome between the remaining candidates.
    *   **ND, U, Transitivity:** Generally satisfied.

**4.3 Focusing on IIA Violation:**

Many democratic voting systems are designed to avoid dictatorship and ensure a reasonable domain and unanimity. The most common point of failure for many systems that seem fair is IIA. The intuition behind IIA's difficulty is that it requires the social outcome between two options to be invariant to the existence or ranking of other options. This is often violated when the system has to make choices about which options to eliminate or which candidates are "irrelevant" in a dynamic process.

---

### 5. Practice Questions and Answers

**Question 1:**
Which of the following is NOT one of Arrow's five conditions for a social welfare function?
(a) Unrestricted Domain
(b) Non-Dictatorship
(c) Budget Balance
(d) Independence of Irrelevant Alternatives

**Answer 1:**
(c) Budget Balance. Budget Balance is a desirable property in mechanism design (especially in economic mechanisms), but it is not one of the conditions in Arrow's Impossibility Theorem. The theorem focuses on aggregating preferences for social choice.

**Question 2:**
If a voting system allows for the Condorcet Paradox (where a cyclically ordered set of pairwise majority winners occurs), which of Arrow's conditions is it most likely violating?
(a) Unrestricted Domain
(b) Pareto Efficiency
(c) Transitivity of Social Choice
(d) Non-Dictatorship

**Answer 2:**
(c) Transitivity of Social Choice. The Condorcet Paradox is the classic example of a social choice rule (simple majority voting) that can fail to produce a transitive social preference ordering.

**Question 3:**
Explain the concept of "Independence of Irrelevant Alternatives" (IIA) in your own words. Provide a brief hypothetical example of how a voting system might violate IIA.

**Answer 3:**
IIA means that the social preference between two alternatives (say, X and Y) should only depend on how individuals rank X and Y relative to each other, and not on how individuals rank any other alternative (say, Z).

*   **Hypothetical Example:** Consider an election with three candidates: Alice, Bob, and Carol.
    *   **Scenario A:** Voters rank candidates as follows:
        *   Voter 1: Alice > Bob > Carol
        *   Voter 2: Bob > Carol > Alice
        *   Voter 3: Carol > Alice > Bob
    *   If we use a system where the winner is determined by pairwise comparison (like Condorcet), Alice beats Carol, Carol beats Bob, but Bob beats Alice (Condorcet paradox). Let's assume for simplicity that the social choice between Alice and Bob is Alice (Alice > Bob).
    *   **Scenario B:** Now, let's introduce a new candidate, David, who is very similar to Alice, and voters update their preferences accordingly:
        *   Voter 1: Alice > David > Bob > Carol
        *   Voter 2: Bob > Carol > David > Alice
        *   Voter 3: Carol > David > Alice > Bob
    *   Crucially, Voter 1's relative ranking of Alice vs. Bob is still Alice > Bob. Voter 2's is Bob > Alice. Voter 3's relative ranking of Alice vs. Bob is still Alice > Bob.
    *   If IIA held, the social preference between Alice and Bob should remain unchanged. However, in many voting systems (like Instant Runoff Voting), the introduction of David might lead to Alice being eliminated early, changing the final social choice between Bob and Carol, or even changing the social outcome between Alice and Bob if Alice was eliminated in a way that Bob then wins against Carol. This demonstrates a violation of IIA.

**Question 4:**
Arrow's Impossibility Theorem states that no voting system can satisfy all five conditions. What are the four key conditions Arrow identified that are impossible to satisfy simultaneously?

**Answer 4:**
The four key conditions that are impossible to satisfy simultaneously are:
1.  Unrestricted Domain (U)
2.  Non-Dictatorship (ND)
3.  Pareto Efficiency (PE)
4.  Independence of Irrelevant Alternatives (IIA)
(The fifth condition, transitivity of the social choice, is implied by the other four).

---

### 6. Important Points to Remember

*   **Mechanism Design is about designing the "rules of the game."**
*   **Arrow's Impossibility Theorem is a foundational result in Social Choice Theory, with deep implications for mechanism design and voting systems.**
*   **The theorem states that no "perfect" social welfare function exists that can satisfy all desirable fairness criteria (U, ND, PE, IIA).**
*   **Every real-world voting system or social choice mechanism must compromise on at least one of these principles.**
*   **Independence of Irrelevant Alternatives (IIA) is often the hardest condition to satisfy and is violated by many common voting systems, especially those involving elimination rounds or strategic voting possibilities.**
*   **Understanding Arrow's theorem helps us appreciate the inherent trade-offs in collective decision-making and the design of fair mechanisms.**

---
