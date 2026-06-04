---
title: "MiniMax criterion"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a67"
status: "completed"
scrapedAt: "2026-05-20T18:07:25.182Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications

### Topic: MiniMax Criterion

---

### 1. Introduction

This section introduces the MiniMax criterion, a fundamental concept in decision-making under uncertainty. It is particularly relevant in situations where a decision-maker faces multiple possible actions and each action can lead to different outcomes depending on uncontrollable events (states of nature). The MiniMax criterion is a **pessimistic** approach, meaning it focuses on minimizing the maximum possible loss.

**Relation to Course Outcomes:**

*   **CO2: To apply decision theory under various conditions of certainty, risk, and uncertainty.** (Knowledge Level: K3) - The MiniMax criterion is a core tool for decision-making under uncertainty.
*   **CO4: To solve Game Theory problems.** (Knowledge Level: K3) - The MiniMax criterion is directly used in Game Theory, especially for finding saddle points in zero-sum games.

---

### 2. Key Concepts and Definitions

#### 2.1. Decision Theory

Decision theory is a framework for making rational choices when faced with uncertainty. It involves:

*   **Decision Alternatives (Actions):** The choices available to the decision-maker.
*   **States of Nature:** Possible future events or conditions that are outside the control of the decision-maker, but which affect the outcome of the decision.
*   **Payoff (or Outcome):** The result obtained for each combination of a decision alternative and a state of nature. This can be profit, cost, utility, etc.

#### 2.2. Decision Making Under Uncertainty

This occurs when the probabilities of the states of nature are **unknown**. In such scenarios, the decision-maker must rely on criteria that do not require probability estimates.

#### 2.3. The MiniMax Criterion

The MiniMax criterion is a **pessimistic** strategy for decision-making under uncertainty. It is also known as the **maximin** criterion when applied to maximizing payoffs (e.g., profit) and the **minimax** criterion when applied to minimizing costs (e.g., losses).

*   **Goal:** To minimize the maximum possible regret (or loss).
*   **Approach:**
    1.  For each decision alternative, identify the worst possible outcome (maximum loss or maximum regret) that could occur under any state of nature.
    2.  Choose the decision alternative that has the *minimum* of these maximum losses (or regrets).

#### 2.4. Payoff Matrix

A payoff matrix is a tabular representation that shows the payoffs for each decision alternative under each state of nature.

**Example Payoff Matrix (Profits):**

| Decision Alternatives | State of Nature 1 ($S_1$) | State of Nature 2 ($S_2$) | State of Nature 3 ($S_3$) |
| :-------------------- | :------------------------ | :------------------------ | :------------------------ |
| Action A              | 10                        | 5                         | 8                         |
| Action B              | 12                        | 4                         | 6                         |
| Action C              | 9                         | 7                         | 7                         |

#### 2.5. Regret (or Opportunity Loss) Matrix

A regret matrix is derived from a payoff matrix. For each state of nature, the regret for a particular action is the difference between the best possible payoff for that state of nature and the payoff obtained by choosing that action.

*   **Calculation:** For each column (state of nature), find the maximum payoff. Then, for each cell in that column, subtract the cell's payoff from the maximum payoff for that column.

**Example Regret Matrix (derived from the Payoff Matrix above):**

**Step 1: Find maximum payoff for each state of nature.**
*   $S_1$: max(10, 12, 9) = 12
*   $S_2$: max(5, 4, 7) = 7
*   $S_3$: max(8, 6, 7) = 8

**Step 2: Calculate regrets.**

| Decision Alternatives | State of Nature 1 ($S_1$) (Max=12) | State of Nature 2 ($S_2$) (Max=7) | State of Nature 3 ($S_3$) (Max=8) |
| :-------------------- | :-------------------------------- | :-------------------------------- | :-------------------------------- |
| Action A              | 12 - 10 = 2                       | 7 - 5 = 2                         | 8 - 8 = 0                         |
| Action B              | 12 - 12 = 0                       | 7 - 4 = 3                         | 8 - 6 = 2                         |
| Action C              | 12 - 9 = 3                        | 7 - 7 = 0                         | 8 - 7 = 1                         |

---

### 3. Applying the MiniMax Criterion

The MiniMax criterion is typically applied to the **regret matrix** to minimize the maximum regret.

**Procedure:**

1.  **Construct the Regret Matrix:** Calculate the opportunity loss (regret) for each decision alternative under each state of nature.
2.  **Find Maximum Regret for Each Action:** For each row (decision alternative), find the largest regret value.
3.  **Select the Minimum of Maximum Regrets:** Choose the decision alternative that corresponds to the smallest of these maximum regret values.

#### 3.1. Example Application (using the Regret Matrix from Section 2.5)

**Step 1 & 2: Regret Matrix and Maximum Regrets:**

| Decision Alternatives | State of Nature 1 ($S_1$) | State of Nature 2 ($S_2$) | State of Nature 3 ($S_3$) | **Maximum Regret** |
| :-------------------- | :------------------------ | :------------------------ | :------------------------ | :----------------- |
| Action A              | 2                         | 2                         | 0                         | **2**              |
| Action B              | 0                         | 3                         | 2                         | **3**              |
| Action C              | 3                         | 0                         | 1                         | **3**              |

**Step 3: Select Minimum of Maximum Regrets:**

*   Maximum Regret for Action A = 2
*   Maximum Regret for Action B = 3
*   Maximum Regret for Action C = 3

The minimum of these maximum regrets is **2**. Therefore, the decision-maker should choose **Action A**.

**Interpretation:** By choosing Action A, the decision-maker ensures that their maximum possible regret (loss of potential profit) will not exceed 2 units, regardless of which state of nature actually occurs.

#### 3.2. MiniMax for Costs

If the payoff matrix represents costs (which we want to minimize), the MiniMax criterion would be applied directly to the cost matrix.

*   **Approach:**
    1.  For each decision alternative, identify the *maximum* cost.
    2.  Choose the decision alternative that has the *minimum* of these maximum costs.

**Example Cost Matrix:**

| Decision Alternatives | State of Nature 1 ($S_1$) | State of Nature 2 ($S_2$) | State of Nature 3 ($S_3$) |
| :-------------------- | :------------------------ | :------------------------ | :------------------------ |
| Action X              | 5                         | 8                         | 6                         |
| Action Y              | 7                         | 4                         | 9                         |
| Action Z              | 6                         | 6                         | 7                         |

**Applying MiniMax to Costs:**

**Step 1: Find Maximum Cost for Each Action.**

| Decision Alternatives | State of Nature 1 ($S_1$) | State of Nature 2 ($S_2$) | State of Nature 3 ($S_3$) | **Maximum Cost** |
| :-------------------- | :------------------------ | :------------------------ | :------------------------ | :--------------- |
| Action X              | 5                         | 8                         | 6                         | **8**            |
| Action Y              | 7                         | 4                         | 9                         | **9**            |
| Action Z              | 6                         | 6                         | 7                         | **7**            |

**Step 2: Select Minimum of Maximum Costs.**

*   Maximum Cost for Action X = 8
*   Maximum Cost for Action Y = 9
*   Maximum Cost for Action Z = 7

The minimum of these maximum costs is **7**. Therefore, the decision-maker should choose **Action Z**.

**Interpretation:** By choosing Action Z, the decision-maker guarantees that their maximum possible cost will be at most 7 units.

---

### 4. Connection to Game Theory (CO4)

The MiniMax criterion is central to the analysis of zero-sum, two-person games.

*   **Zero-Sum Game:** A game where the total gains of the players equal their total losses. One player's gain is the other player's loss.
*   **Two-Person Game:** A game involving only two players.

In a zero-sum, two-person game, the payoff matrix typically represents the payoff to Player 1 (the row player) against Player 2 (the column player). Player 2 is assumed to be a rational opponent who wants to *minimize* Player 1's payoff (which is equivalent to maximizing Player 2's own payoff, as the game is zero-sum).

**Player 1's Strategy (Maximin):** Player 1 wants to maximize their minimum possible payoff. They look at the minimum payoff for each of their strategies and choose the strategy that yields the highest minimum payoff. This is Player 1's **maximin** value.

**Player 2's Strategy (Minimax):** Player 2 wants to minimize Player 1's maximum possible payoff. They look at the maximum payoff Player 1 can achieve for each of Player 2's strategies and choose the strategy that yields the lowest maximum payoff for Player 1. This is Player 2's **minimax** value.

**Saddle Point:** If the maximin value equals the minimax value, the game has a saddle point. The optimal strategy for both players is to play the pure strategy that leads to this saddle point. The value of the game is this saddle point value.

**Example (Game Theory context):**

Consider the following payoff matrix for Player 1:

| Player 1 \ Player 2 | Strategy A | Strategy B |
| :------------------ | :--------- | :--------- |
| Strategy X          | 3          | -1         |
| Strategy Y          | 2          | 1          |

**Player 1's Maximin:**
*   Strategy X: Minimum payoff = -1
*   Strategy Y: Minimum payoff = 1
*   Player 1's maximin value = max(-1, 1) = 1 (by choosing Strategy Y)

**Player 2's Minimax:**
*   Player 2's strategies are columns. Player 2 wants to minimize Player 1's payoff.
*   For Player 2's Strategy A: Player 1's maximum payoff = max(3, 2) = 3
*   For Player 2's Strategy B: Player 1's maximum payoff = max(-1, 1) = 1
*   Player 2's minimax value = min(3, 1) = 1 (by choosing Strategy B)

**Saddle Point:** Since Player 1's maximin value (1) equals Player 2's minimax value (1), there is a saddle point at the payoff of 1, achieved when Player 1 plays Strategy Y and Player 2 plays Strategy B.

**Note:** The MiniMax criterion, when applied to minimizing costs in decision theory, is equivalent to Player 2's minimax strategy in a zero-sum game where costs are transformed into negative payoffs.

---

### 5. Important Points to Remember

*   **Pessimistic Approach:** The MiniMax criterion is inherently conservative, as it focuses on the worst-case scenario.
*   **Decision Under Uncertainty:** It is used when probabilities of states of nature are unknown.
*   **Regret Matrix:** The criterion is most commonly applied to the regret matrix to minimize maximum regret.
*   **Cost Minimization:** When dealing with costs, apply MiniMax directly to the cost matrix to minimize the maximum cost.
*   **Game Theory:** It's a fundamental concept for finding optimal pure strategies in zero-sum games and identifying saddle points.
*   **Ignoring Probabilities:** Unlike criteria like Expected Monetary Value (EMV), MiniMax does not consider the likelihood of different states of nature.

---

### 6. Examples and Practice Questions

**Question 1:**

A company is deciding which of three new machines to purchase. The machines have different costs and operating efficiencies, which depend on the state of the economy. The payoffs (in thousands of dollars) are given in the following table:

| Machine Type | Good Economy ($S_1$) | Fair Economy ($S_2$) | Poor Economy ($S_3$) |
| :----------- | :------------------- | :------------------- | :------------------- |
| A            | 100                  | 60                   | 20                   |
| B            | 120                  | 70                   | 10                   |
| C            | 80                   | 80                   | 80                   |

Assuming you are a pessimist and want to minimize your maximum possible loss (regret), which machine should you choose?

**Solution:**

1.  **Construct the Regret Matrix:**
    *   Max for $S_1$: 120
    *   Max for $S_2$: 80
    *   Max for $S_3$: 80

    | Machine Type | Good Economy ($S_1$) (Max=120) | Fair Economy ($S_2$) (Max=80) | Poor Economy ($S_3$) (Max=80) |
    | :----------- | :----------------------------- | :---------------------------- | :---------------------------- |
    | A            | 120 - 100 = 20                 | 80 - 60 = 20                  | 80 - 20 = 60                  |
    | B            | 120 - 120 = 0                  | 80 - 70 = 10                  | 80 - 10 = 70                  |
    | C            | 120 - 80 = 40                  | 80 - 80 = 0                   | 80 - 80 = 0                   |

2.  **Find Maximum Regret for Each Machine:**
    *   Machine A: max(20, 20, 60) = 60
    *   Machine B: max(0, 10, 70) = 70
    *   Machine C: max(40, 0, 0) = 40

3.  **Select Minimum of Maximum Regrets:**
    *   Minimum of (60, 70, 40) is 40.

**Answer:** You should choose **Machine C**.

**Question 2:**

A contractor must choose one of three construction methods (M1, M2, M3) for a new project. The costs associated with each method depend on the outcome of a government contract bidding process, which can be favorable (F) or unfavorable (U). The estimated costs (in thousands of dollars) are given below. The contractor wishes to minimize the maximum possible cost.

| Method | Favorable Bid ($S_1$) | Unfavorable Bid ($S_2$) |
| :----- | :-------------------- | :---------------------- |
| M1     | 50                    | 120                     |
| M2     | 70                    | 90                      |
| M3     | 60                    | 100                     |

Which method should the contractor choose using the MiniMax criterion?

**Solution:**

1.  **Find Maximum Cost for Each Method:**
    *   Method M1: max(50, 120) = 120
    *   Method M2: max(70, 90) = 90
    *   Method M3: max(60, 100) = 100

2.  **Select Minimum of Maximum Costs:**
    *   Minimum of (120, 90, 100) is 90.

**Answer:** The contractor should choose **Method M2**.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=KzE_56Hk5B8) |


### 7. References and Further Reading

*   **Operations Research by Paneerselvam R. (PHI, Third edition, 2023):** This book likely provides a foundational understanding of decision theory and criteria like MiniMax, often in the context of introductory Operations Research concepts.
*   **Operations Research by Taha (Pearson, Tenth edition, 2019):** Taha's book is a comprehensive resource. It will undoubtedly cover decision theory under uncertainty, including the MiniMax criterion, and its application in various OR models, including Game Theory.
*   **Introduction to Operations Research by F. S. Hillier and G. J. Lieberman (McGraw Hill, Tenth edition, 2017):** This is another highly regarded textbook that will thoroughly explain decision-making under uncertainty and the role of the MiniMax criterion, especially in Chapter 13 (Decision Making Under Uncertainty).
*   **Discrete Event System Simulation by Banks, Carson, Nelson and Nicol (Pearson, Fifth edition, 2013):** While this book focuses on simulation, it might touch upon decision-making under uncertainty if the simulation context involves choosing between strategies without known probabilities. However, its primary focus is not on normative decision criteria like MiniMax.

---