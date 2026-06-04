---
title: "MaxiMin criterion"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a66"
status: "completed"
scrapedAt: "2026-05-20T18:07:24.465Z"
---
# Quantitative Techniques for Engineers

## Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications

### Topic: MaxiMin Criterion

---

### 1. Introduction to Operations Research (OR) and Decision Making

**Operations Research (OR)** is a discipline that deals with the application of advanced analytical methods to help make better decisions. It involves using mathematical modeling, statistical analysis, and algorithms to find optimal or near-optimal solutions to complex problems.

**Decision Making** is a fundamental aspect of engineering. Engineers constantly face decisions that impact efficiency, cost, safety, and overall project success. OR provides a structured and quantitative approach to decision making, especially in situations involving uncertainty.

---

### 2. Decision Making Under Uncertainty

When making decisions, the future outcomes are often unknown. OR categorizes decision-making environments based on the level of knowledge about future events:

*   **Decision Making Under Certainty:** All possible outcomes and their probabilities are known. (e.g., calculating the exact cost of materials for a known project).
*   **Decision Making Under Risk:** The possible outcomes are known, and the probability of each outcome occurring is also known. (e.g., investing in a project where market demand probabilities are estimated).
*   **Decision Making Under Uncertainty:** The possible outcomes are known, but their probabilities are unknown. This is where criteria like MaxiMin come into play.

---

### 3. The MaxiMin Criterion (Pessimistic Approach)

The MaxiMin criterion is a decision-making rule used when the decision-maker faces a situation of **decision making under uncertainty**. It's a **pessimistic** approach because it assumes that the worst possible outcome will occur for each alternative, and then chooses the alternative that maximizes this minimum outcome.

**Key Concepts:**

*   **Decision Alternatives:** The different choices or courses of action available to the decision-maker.
*   **States of Nature:** The possible future events or conditions that can occur, which are outside the control of the decision-maker.
*   **Payoff Matrix:** A table that summarizes the payoffs (e.g., profit, cost, utility) for each decision alternative under each possible state of nature.

**How to Apply the MaxiMin Criterion:**

1.  **Identify Decision Alternatives:** List all possible actions you can take.
2.  **Identify States of Nature:** List all possible future events that could occur.
3.  **Construct a Payoff Matrix:** For each decision alternative, determine the payoff (what you gain or lose) under each state of nature.
4.  **Find the Minimum Payoff for Each Alternative:** For each row (decision alternative) in the payoff matrix, find the smallest payoff (the worst-case scenario).
5.  **Choose the Alternative with the Maximum of the Minimums:** Select the decision alternative that has the largest (maximum) of these minimum payoffs.

**Mathematical Representation:**

Let $D_i$ be the $i$-th decision alternative and $S_j$ be the $j$-th state of nature.
Let $P_{ij}$ be the payoff for decision alternative $D_i$ under state of nature $S_j$.

The MaxiMin criterion seeks to find:

$\max_{i} \left( \min_{j} P_{ij} \right)$

This means:
*   For each decision alternative $i$, find $\min_{j} P_{ij}$ (the minimum payoff).
*   From these minimum payoffs, choose the alternative $i$ that gives the maximum value.

---

### 4. Examples of MaxiMin Criterion

**Example 1: Investment Decision**

A company is considering investing in one of three new projects (A, B, C). The potential market demand for these projects is uncertain, with three possible states of nature: Low Demand, Medium Demand, and High Demand. The company's estimated profits (in thousands of dollars) for each project under each demand scenario are as follows:

| Decision Alternative | Low Demand | Medium Demand | High Demand |
| :----------------- | :--------- | :------------ | :---------- |
| Project A          | 50         | 120           | 200         |
| Project B          | 80         | 100           | 150         |
| Project C          | 20         | 180           | 250         |

**Applying the MaxiMin Criterion:**

1.  **Minimum Payoff for Project A:** $\min(50, 120, 200) = 50$
2.  **Minimum Payoff for Project B:** $\min(80, 100, 150) = 80$
3.  **Minimum Payoff for Project C:** $\min(20, 180, 250) = 20$

Now, find the maximum of these minimum payoffs:

$\max(50, 80, 20) = 80$

**Decision:** According to the MaxiMin criterion, the company should choose **Project B** because it guarantees the highest minimum profit of $80,000. This approach protects the company from the worst possible outcome.

---

**Example 2: Manufacturing Choice (Minimizing Cost)**

A manufacturing firm needs to decide on a production process. There are three processes (P1, P2, P3), and the cost of production depends on the quality of raw materials received (Low Quality, Medium Quality, High Quality). The firm wants to minimize the production cost.

| Decision Alternative | Low Quality | Medium Quality | High Quality |
| :----------------- | :---------- | :------------- | :----------- |
| Process P1         | 100         | 90             | 70           |
| Process P2         | 120         | 80             | 60           |
| Process P3         | 90          | 110            | 50           |

**Applying the MaxiMin Criterion (for Minimizing Cost):**

When the objective is to minimize cost, we are looking for the **MiniMax** criterion. The logic is to minimize the maximum possible cost. However, if we strictly adhere to "MaxiMin," we would be maximizing the minimum cost, which is not desirable for cost minimization.

Let's clarify the objective. If the goal is to minimize cost, the appropriate criterion is **MiniMax** (minimize the maximum possible loss). However, the prompt specifically asks for the MaxiMin criterion. To adapt MaxiMin for cost minimization, we can:

*   **Option A: Invert the Payoffs:** Convert costs into "benefits" by subtracting them from a large constant, or by considering them as losses. If we treat costs as negative payoffs (losses), then MaxiMin on losses means maximizing the minimum loss (which is still not the goal).
*   **Option B: Apply MiniMax Directly:** The MaxiMin criterion, as typically presented for maximization problems, aims to maximize the minimum gain. When dealing with costs, the equivalent logic is to **minimize the maximum loss**. This is known as the **MiniMax** criterion.

Let's assume the question implies "What is the best decision if you want to minimize your maximum possible loss (MiniMax)?" or "If you want to maximize your minimum gain (MaxiMin), what is the equivalent for cost?"

If we consider the goal as *minimizing the maximum possible cost*, we use the **MiniMax** criterion:

1.  **Find the Maximum Cost for Each Process:**
    *   Process P1: $\max(100, 90, 70) = 100$
    *   Process P2: $\max(120, 80, 60) = 120$
    *   Process P3: $\max(90, 110, 50) = 110$

2.  **Choose the Process with the Minimum of the Maximums:**
    $\min(100, 120, 110) = 100$

**Decision (using MiniMax for cost minimization):** Process P1 is chosen because it minimizes the maximum cost to $100.

**If we MUST use MaxiMin for cost minimization (which is counter-intuitive):**

This would mean we are looking for the decision that offers the highest "worst-case cost." This is usually not the desired outcome. However, if we frame it as "Which process offers the least worst-case cost," we would do:

1.  **Find the Minimum Cost for Each Process:**
    *   Process P1: $\min(100, 90, 70) = 70$
    *   Process P2: $\min(120, 80, 60) = 60$
    *   Process P3: $\min(90, 110, 50) = 50$

2.  **Choose the Process with the Maximum of the Minimums:**
    $\max(70, 60, 50) = 70$

**Decision (using MaxiMin literally for cost, i.e., maximizing the minimum cost):** Process P1 would be chosen, guaranteeing at least a cost of 70. This is NOT the standard approach for cost minimization.

**Important Note:** The MaxiMin criterion is primarily used for **maximization** problems where outcomes are gains. For **minimization** problems (like costs), the analogous criterion is **MiniMax** (minimize the maximum loss). When asked about MaxiMin in a cost context, it's crucial to clarify the intent. Usually, it implies the MiniMax strategy.

---

### 5. Relation to Textbooks and Course Outcomes

*   **Textbooks:**
    *   **Paneerselvam R. (Operations Research):** This textbook typically covers decision theory under uncertainty, including criteria like MaxiMin, MiniMax, MaxiMax, and MiniMin. It would likely present the payoff matrix structure and the step-by-step application of these rules. (Refer to chapters on Decision Theory).
    *   **Taha (Operations Research):** Similar to Paneerselvam, Taha's comprehensive coverage of OR would include decision analysis under uncertainty. The MaxiMin criterion would be explained as a criterion for a risk-averse decision-maker. (Refer to chapters on Decision Analysis or Decision Making Under Uncertainty).
    *   **Hillier & Lieberman (Introduction to Operations Research):** This foundational text provides a rigorous treatment of decision analysis. The MaxiMin criterion would be presented as a strategy for pessimistic decision-makers facing unknown probabilities. (Refer to chapters on Decision Making Under Uncertainty).
    *   **Banks, Carson, Nelson, Nicol (Discrete Event System Simulation):** While this book focuses on simulation, understanding decision-making under uncertainty is a prerequisite for designing robust simulation models that account for various scenarios.

*   **Course Outcomes:**
    *   **CO2: To apply decision theory under various conditions of certainty, risk, and uncertainty. (Knowledge Level: K3)** The MaxiMin criterion is a core concept within decision theory under uncertainty, directly addressing this outcome. Understanding how to apply it demonstrates K3 knowledge.

---

### 6. Important Points to Remember

*   **MaxiMin is for Uncertainty:** It's applied when probabilities of states of nature are unknown.
*   **Pessimistic Approach:** It focuses on the worst possible outcome for each alternative and aims to make the best of the worst.
*   **Maximization Goal:** It's primarily used when the objective is to maximize a payoff (e.g., profit, utility).
*   **MiniMax for Minimization:** When the objective is to minimize a cost or loss, the analogous criterion is **MiniMax** (minimize the maximum loss).
*   **Guaranteed Minimum:** The MaxiMin strategy guarantees a certain minimum outcome, regardless of what state of nature occurs.
*   **Ignores Upside Potential:** It completely disregards the possibility of favorable outcomes and higher payoffs.

---

### 7. Practice Questions and Exercises

**Exercise 1:**

A company is considering launching one of three new products (X, Y, Z). The success of each product depends on the general economic conditions (Recession, Stable, Boom). The estimated annual profits (in millions of dollars) are given below:

| Decision Alternative | Recession | Stable | Boom |
| :----------------- | :-------- | :----- | :--- |
| Product X          | -2        | 5      | 15   |
| Product Y          | -5        | 7      | 20   |
| Product Z          | 0         | 4      | 12   |

Using the **MaxiMin** criterion, which product should the company launch?

**Solution:**

1.  **Minimum Profit for Product X:** $\min(-2, 5, 15) = -2$
2.  **Minimum Profit for Product Y:** $\min(-5, 7, 20) = -5$
3.  **Minimum Profit for Product Z:** $\min(0, 4, 12) = 0$

Now, find the maximum of these minimums: $\max(-2, -5, 0) = 0$.

**Answer:** The company should launch **Product Z** because it offers the highest minimum profit (which is zero in this case, avoiding losses).

---

**Exercise 2:**

A farmer needs to decide which crop to plant (Corn, Soybeans, Wheat). The yield depends on the amount of rainfall (Drought, Normal, Heavy). The expected profit per acre is given below. The farmer wants to use the **MaxiMin** criterion.

| Decision Alternative | Drought | Normal | Heavy |
| :----------------- | :------ | :----- | :---- |
| Corn               | 100     | 300    | 500   |
| Soybeans           | 150     | 250    | 450   |
| Wheat              | 50      | 400    | 600   |

Which crop should the farmer plant?

**Solution:**

1.  **Minimum Profit for Corn:** $\min(100, 300, 500) = 100$
2.  **Minimum Profit for Soybeans:** $\min(150, 250, 450) = 150$
3.  **Minimum Profit for Wheat:** $\min(50, 400, 600) = 50$

Now, find the maximum of these minimums: $\max(100, 150, 50) = 150$.

**Answer:** The farmer should plant **Soybeans** to maximize the minimum possible profit.

---

**Exercise 3 (Cost Minimization with MiniMax):**

A company is selecting a supplier for a critical component. The cost of the component depends on the supplier's production efficiency (Poor, Average, Good). The company wants to minimize its cost.

| Decision Alternative | Poor Efficiency | Average Efficiency | Good Efficiency |
| :----------------- | :-------------- | :----------------- | :-------------- |
| Supplier A         | 50              | 45                 | 40              |
| Supplier B         | 60              | 40                 | 35              |
| Supplier C         | 45              | 55                 | 30              |

Which supplier should the company choose if it wants to **minimize the maximum possible cost** (i.e., use the MiniMax criterion)?

**Solution:**

1.  **Maximum Cost for Supplier A:** $\max(50, 45, 40) = 50$
2.  **Maximum Cost for Supplier B:** $\max(60, 40, 35) = 60$
3.  **Maximum Cost for Supplier C:** $\max(45, 55, 30) = 55$

Now, find the minimum of these maximums: $\min(50, 60, 55) = 50$.

**Answer:** The company should choose **Supplier A** as it minimizes the maximum possible cost.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
