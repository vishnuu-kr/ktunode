---
title: "Decision Making: Steps, Decision under certainty, risk and uncertainty: Decision trees, EMV method, EOL method, MaxiMin criterion, MiniMaxcriterion, MiniMax regret criterion."
subject: "MANAGEMENT FOR ENGINEERS"
module: "Module 2: Leading and Controlling: Leading Vs Managing"
branch: "Mechanical Engineering"
semester: 5
topicId: "68a3fd1451d0cf48044633de"
status: "completed"
scrapedAt: "2026-05-20T18:01:05.994Z"
---
# Management for Engineers

## Module 2: Leading and Controlling: Leading vs. Managing

### Topic: Decision Making

---

This topic focuses on the fundamental process of decision making within a management context. Engineers often face decisions requiring a structured approach, especially when dealing with varying levels of certainty. We will explore the systematic steps involved, different decision environments, and analytical tools to support informed choices.

**Relevant Course Outcomes:**

*   **CO3: Demonstrate ability in decision making and productivity analysis (Knowledge Level: K3)** - This topic directly addresses the ability to make decisions, a core component of productivity.
*   **CO1: Develop ability to critically analyze a variety of management practices in the contemporary context (Knowledge Level: K4)** - Understanding different decision-making environments and techniques allows for critical analysis of how managers operate.

---

### 1. The Decision-Making Process

Decision making is the process of identifying and choosing among alternative courses of action to achieve desired outcomes. It's a critical managerial function that permeates all other functions of management.

**(Referenced from Koontz, Weihrich, & Cannice, 11th Ed., Chapter 8: "The Manager as a Decision Maker")**

**Key Steps in the Decision-Making Process:**

1.  **Identify the Decision Situation:** Recognize that a decision needs to be made. This often involves identifying a problem or an opportunity.
    *   **Example:** A production line is experiencing a higher-than-usual defect rate. This is a problem requiring a decision.
2.  **Identify Decision Criteria:** Determine the factors that are important in resolving the problem or exploiting the opportunity.
    *   **Example:** For the defect rate problem, criteria might include cost of rework, time to fix, impact on customer satisfaction, and long-term reliability.
3.  **Weight the Criteria:** Assign relative importance to each criterion. This helps prioritize alternatives.
    *   **Example:** Customer satisfaction might be weighted higher than rework cost for a critical product.
4.  **Develop Alternatives:** Brainstorm and identify possible courses of action.
    *   **Example:** For the defect rate: change supplier, retrain operators, modify machinery, implement stricter quality checks.
5.  **Analyze Alternatives:** Evaluate each alternative against the weighted criteria. This is where different decision environments (certainty, risk, uncertainty) come into play.
    *   **Example:** Assess how each proposed solution addresses cost, time, and satisfaction.
6.  **Select the Best Alternative:** Choose the alternative that best satisfies the weighted criteria.
    *   **Example:** Based on analysis, retraining operators might be the most effective and cost-efficient solution.
7.  **Implement the Decision:** Put the chosen alternative into action. This involves planning, resource allocation, and communication.
    *   **Example:** Develop and conduct a retraining program for the production operators.
8.  **Evaluate the Decision's Effectiveness:** Review the outcome of the decision to see if the problem has been resolved or the opportunity realized. This feedback loop helps refine future decision-making.
    *   **Example:** Monitor the defect rate after the retraining program.

**Important Point to Remember:** Decision making is an iterative process. The evaluation step often leads back to identifying new problems or refining existing ones.

---

### 2. Decision Environments

The environment in which a decision is made significantly influences the tools and techniques used.

**(Referenced from Mahadevan, 3rd Ed., Chapter 3: "Decision Analysis")**

#### 2.1 Decision Under Certainty

In this environment, all facts, alternatives, and consequences are known and predictable. There is only one outcome for each alternative.

*   **Characteristics:**
    *   Complete knowledge of all factors.
    *   No uncertainty about outcomes.
    *   Probabilities are 0 or 1.
*   **Example:** A company needs to choose a shipping method. They know the exact cost and delivery time for each option (e.g., air freight, road transport, sea freight). The choice is straightforward based on cost and time preferences.
*   **Approach:** Typically involves straightforward analysis of known costs and benefits.

#### 2.2 Decision Under Risk

In this environment, the decision-maker knows the possible outcomes for each alternative, but not with certainty. However, they can assign probabilities to each outcome.

*   **Characteristics:**
    *   Known alternatives.
    *   Known possible outcomes for each alternative.
    *   Known probabilities for each outcome.
*   **Example:** A company is deciding whether to launch a new product. They estimate the probability of success (high sales, medium sales, low sales) and the associated profits or losses for each scenario.
    *   Launch Product:
        *   High Sales: Probability 0.4, Profit $100,000
        *   Medium Sales: Probability 0.3, Profit $50,000
        *   Low Sales: Probability 0.3, Profit -$20,000 (loss)
*   **Approach:** Requires quantitative methods like Expected Monetary Value (EMV) to evaluate alternatives.

#### 2.3 Decision Under Uncertainty

In this environment, the decision-maker knows the possible alternatives, but not the outcomes or the probabilities of those outcomes. The future is unpredictable.

*   **Characteristics:**
    *   Known alternatives.
    *   Unknown outcomes.
    *   Unknown probabilities of outcomes.
*   **Example:** A startup is developing a completely new technology. They don't know if it will work, how the market will react, or what the competition will do.
*   **Approach:** Requires decision-making criteria that are less reliant on probabilities, such as MaxiMin, MiniMax, and MiniMax Regret.

---

### 3. Decision Analysis Tools

These tools help managers analyze alternatives, especially in conditions of risk and uncertainty.

**(Referenced from Tripathi & Reddy, 6th Ed., Chapter 6: "Decision Making and Planning")**

#### 3.1 Decision Trees

A decision tree is a graphical representation of the decisions and their possible consequences, including chance events, outcomes, and their associated probabilities and payoffs. It's particularly useful for sequential decision-making problems.

*   **Key Components:**
    *   **Decision Nodes (Squares):** Represent points where a decision must be made.
    *   **Chance Nodes (Circles):** Represent points where uncertain events occur, with branches for each possible outcome and its probability.
    *   **Branches:** Connect nodes and represent a decision or an outcome.
    *   **Terminal Nodes (Triangles):** Represent the final outcomes of a sequence of decisions and events.
    *   **Payoffs:** The value (profit, cost, etc.) associated with each terminal node.

*   **How to Construct and Analyze:**
    1.  **Start with the initial decision.**
    2.  **Branch out with possible decisions.**
    3.  **At the end of each decision branch, add chance nodes for uncertain events.**
    4.  **Assign probabilities to each branch from a chance node (probabilities must sum to 1).**
    5.  **Assign payoffs to each terminal node.**
    6.  **Work backward from the terminal nodes to the decision nodes.**
    7.  **At each chance node, calculate the Expected Monetary Value (EMV) of that node.** (EMV = Σ (Probability of outcome * Payoff of outcome))
    8.  **At each decision node, choose the alternative that leads to the highest EMV (if maximizing profit) or lowest EMV (if minimizing cost).** This EMV becomes the value of the decision node.

*   **Example:** A company is deciding whether to build a large factory or a small factory, or do nothing. The market demand can be high, medium, or low.

    ```
                           Decision Node (Build?):
                           /         |         \
                          /          |          \
                Build Large (EMV_Large)   Build Small (EMV_Small)   Do Nothing (0)
                        / | \                 / | \
                       /  |  \               /  |  \
          Chance Node (Demand):   Chance Node (Demand):
          /    |    \           /    |    \
         /     |     \         /     |     \
    High (0.4) Medium (0.4) Low (0.2) High (0.4) Medium (0.4) Low (0.2)
       |        |        |         |        |        |
      $500k   $100k   -$200k     $200k    $50k   -$50k
    ```

    **Calculation:**
    *   **EMV_Large:** (0.4 * $500k) + (0.4 * $100k) + (0.2 * -$200k) = $200k + $40k - $40k = $200k
    *   **EMV_Small:** (0.4 * $200k) + (0.4 * $50k) + (0.2 * -$50k) = $80k + $20k - $10k = $90k
    *   **EMV_Do Nothing:** $0

    **Decision:** Build the large factory as it has the highest EMV ($200k).

*   **Important Point to Remember:** Decision trees are powerful for visualizing and quantifying decisions with sequential events and uncertainty.

#### 3.2 Expected Monetary Value (EMV) Method

The EMV method is used to make decisions under risk. It calculates the weighted average of the possible payoffs, where the weights are the probabilities of each outcome.

*   **Formula:** $EMV = \sum_{i=1}^{n} (P_i \times V_i)$
    *   $P_i$: Probability of outcome $i$
    *   $V_i$: Value (payoff) of outcome $i$
    *   $n$: Number of possible outcomes

*   **Application:** Used at chance nodes in decision trees or for single-stage decisions under risk. The alternative with the highest EMV (for profit maximization) or lowest EMV (for cost minimization) is selected.

*   **Example (from Decision Tree example):**
    *   EMV(Build Large) = $200,000
    *   EMV(Build Small) = $90,000
    *   EMV(Do Nothing) = $0
    *   The decision to build the large factory is chosen because it has the highest EMV.

*   **Important Point to Remember:** EMV assumes the decision-maker is risk-neutral.

#### 3.3 Expected Opportunity Loss (EOL) Method (also known as Expected Regret)

EOL is a method used for decision-making under risk that focuses on the "regret" or "opportunity loss" associated with making a suboptimal decision. Opportunity loss is the difference between the payoff of the best possible decision for a given state of nature and the actual payoff of the decision made.

*   **Steps:**
    1.  **Create a Payoff Table:** List alternatives and states of nature with corresponding payoffs.
    2.  **Create an Opportunity Loss (Regret) Table:** For each state of nature, find the maximum payoff. Then, for each alternative under that state of nature, calculate the regret:
        *   Regret = (Maximum Payoff for that State of Nature) - (Payoff of the Chosen Alternative)
    3.  **Calculate the Expected Opportunity Loss (EOL) for each alternative:** Multiply each regret value by the probability of its corresponding state of nature and sum them up.
        *   $EOL = \sum_{i=1}^{n} (P_i \times Regret_i)$
    4.  **Choose the alternative with the minimum EOL.**

*   **Example:** Consider the product launch decision.

    **Payoff Table:**
    | Alternative     | High Demand (P=0.4) | Medium Demand (P=0.4) | Low Demand (P=0.2) |
    | :-------------- | :------------------ | :-------------------- | :----------------- |
    | Launch Product  | $100,000            | $50,000               | -$20,000           |
    | Do Not Launch   | $0                  | $0                    | $0                 |

    **Opportunity Loss Table:**
    *   For High Demand: Max Payoff = $100,000
        *   Regret(Launch) = $100,000 - $100,000 = $0
        *   Regret(Do Not Launch) = $100,000 - $0 = $100,000
    *   For Medium Demand: Max Payoff = $50,000
        *   Regret(Launch) = $50,000 - $50,000 = $0
        *   Regret(Do Not Launch) = $50,000 - $0 = $50,000
    *   For Low Demand: Max Payoff = $0
        *   Regret(Launch) = $0 - (-$20,000) = $20,000
        *   Regret(Do Not Launch) = $0 - $0 = $0

    | Alternative     | High Demand (P=0.4) | Medium Demand (P=0.4) | Low Demand (P=0.2) | EOL (Choose Min) |
    | :-------------- | :------------------ | :-------------------- | :----------------- | :--------------- |
    | Launch Product  | $0                  | $0                    | $20,000            | (0.4*0) + (0.4*0) + (0.2*20000) = $4,000 |
    | Do Not Launch   | $100,000            | $50,000               | $0                 | (0.4*100000) + (0.4*50000) + (0.2*0) = $40,000 + $20,000 = $60,000 |

    **Decision:** Choose "Launch Product" as it has the minimum EOL ($4,000).

*   **Important Point to Remember:** EMV and EOL will always lead to the same decision, but they approach it from different perspectives (maximizing expected payoff vs. minimizing expected regret).

#### 3.4 Decision Criteria Under Uncertainty

When probabilities are unknown, decision-makers often adopt specific attitudes towards risk, which are reflected in these criteria.

**(Referenced from Koontz, Weihrich, & Cannice, 11th Ed., Chapter 8, and Griffin, 11th Ed., Chapter 7: "Decision Making")**

##### 3.4.1 MaxiMin Criterion (Pessimistic Approach)

This criterion is for the highly pessimistic decision-maker. They assume the worst possible outcome will occur for each alternative and then choose the alternative that offers the "best of the worst."

*   **Process:**
    1.  For each alternative, identify the minimum possible payoff.
    2.  Choose the alternative whose minimum payoff is the highest (maximin).
*   **Example (Payoff Table):**
    | Alternative     | State of Nature 1 | State of Nature 2 | State of Nature 3 |
    | :-------------- | :---------------- | :---------------- | :---------------- |
    | Alternative A   | $100              | $50               | $10               |
    | Alternative B   | $80               | $70               | $20               |
    | Alternative C   | $50               | $90               | $30               |

    *   Minimum payoff for A = $10
    *   Minimum payoff for B = $20
    *   Minimum payoff for C = $50

    **Decision:** Choose Alternative C (MaxiMin = $50). This is the best of the worst outcomes.

*   **Important Point to Remember:** Focuses on minimizing potential losses.

##### 3.4.2 MiniMax Criterion (Optimistic Approach)

This criterion is for the highly optimistic decision-maker. They assume the best possible outcome will occur for each alternative and then choose the alternative that offers the "best of the best." (Note: This is less common for profit maximization; often used for cost minimization, where it's called MaxiMin cost). For profit maximization, it's sometimes termed MaxiMax. Let's clarify this for profit maximization:

**MaxiMax Criterion (Optimistic Approach)**

This criterion is for the highly optimistic decision-maker. They assume the best possible outcome will occur for each alternative and then choose the alternative that offers the "best of the best."

*   **Process:**
    1.  For each alternative, identify the maximum possible payoff.
    2.  Choose the alternative whose maximum payoff is the highest (maximax).
*   **Example (Payoff Table):**
    | Alternative     | State of Nature 1 | State of Nature 2 | State of Nature 3 |
    | :-------------- | :---------------- | :---------------- | :---------------- |
    | Alternative A   | $100              | $50               | $10               |
    | Alternative B   | $80               | $70               | $20               |
    | Alternative C   | $50               | $90               | $30               |

    *   Maximum payoff for A = $100
    *   Maximum payoff for B = $70
    *   Maximum payoff for C = $90

    **Decision:** Choose Alternative A (MaxiMax = $100). This is the best of the best outcomes.

*   **Important Point to Remember:** Focuses on maximizing potential gains, ignoring potential downsides.

**MiniMax Criterion (for Cost Minimization)**

If the decision is about minimizing cost, the MiniMax criterion is used. The decision-maker assumes the worst (highest) cost will occur for each alternative and then chooses the alternative that offers the "best of the worst" (minimum of the maximum costs).

*   **Process:**
    1.  For each alternative, identify the maximum possible cost.
    2.  Choose the alternative whose maximum cost is the lowest (minimax).
*   **Example (Cost Table):**
    | Alternative     | State of Nature 1 | State of Nature 2 | State of Nature 3 |
    | :-------------- | :---------------- | :---------------- | :---------------- |
    | Alternative A   | $100              | $50               | $10               |
    | Alternative B   | $80               | $70               | $20               |
    | Alternative C   | $50               | $90               | $30               |

    *   Maximum cost for A = $100
    *   Maximum cost for B = $70
    *   Maximum cost for C = $90

    **Decision:** Choose Alternative B (MiniMax Cost = $70).

*   **Important Point to Remember:** Focuses on minimizing the worst-case scenario (for costs).

##### 3.4.3 MiniMax Regret Criterion (Savage Criterion)

This criterion aims to minimize the maximum potential regret. It's a compromise between the extreme pessimism of MaxiMin and the extreme optimism of MaxiMax.

*   **Process:**
    1.  Create an Opportunity Loss (Regret) Table (as described in EOL method).
    2.  For each alternative, identify the maximum regret value in its row.
    3.  Choose the alternative that has the minimum of these maximum regrets.

*   **Example (using the Opportunity Loss Table from EOL):**

    **Opportunity Loss Table (from EOL example):**
    | Alternative     | High Demand | Medium Demand | Low Demand | Max Regret (Choose Min) |
    | :-------------- | :---------- | :------------ | :--------- | :---------------------- |
    | Launch Product  | $0          | $0            | $20,000    | $20,000                 |
    | Do Not Launch   | $100,000    | $50,000       | $0         | $100,000                |

    *   Maximum regret for "Launch Product" = $20,000
    *   Maximum regret for "Do Not Launch" = $100,000

    **Decision:** Choose "Launch Product" as it has the minimum of the maximum regrets ($20,000).

*   **Important Point to Remember:** Seeks to avoid making a decision that leads to a very large regret.

---

### 4. Connecting to Course Outcomes

*   **CO3: Demonstrate ability in decision making and productivity analysis (K3):** Understanding the steps, environments, and tools (Decision Trees, EMV, EOL, MiniMax, etc.) directly equips engineers with the skills to make better decisions, which in turn improves productivity. For instance, choosing the right production process based on EMV analysis can lead to higher output and lower costs.
*   **CO1: Develop ability to critically analyze a variety of management practices in the contemporary context (K4):** By learning these decision-making frameworks, engineers can critically evaluate how managers (or they themselves) approach complex problems. They can analyze why a particular decision was made under risk or uncertainty and whether alternative approaches might have yielded better results. For example, analyzing a past project's success or failure could involve evaluating the decision-making process used.

---

### Practice Questions and Answers

**Question 1:**
A manager is deciding whether to invest in a new piece of equipment. The potential returns depend on market demand, which can be high (60% probability) or low (40% probability).
If demand is high, the equipment will yield a profit of $150,000.
If demand is low, the equipment will yield a profit of -$50,000 (a loss).
What is the Expected Monetary Value (EMV) of investing in the new equipment?

**Answer 1:**
EMV = (Probability of High Demand * Profit with High Demand) + (Probability of Low Demand * Profit with Low Demand)
EMV = (0.60 * $150,000) + (0.40 * -$50,000)
EMV = $90,000 - $20,000
**EMV = $70,000**

---

**Question 2:**
A project manager is evaluating two options for a critical component. They are unsure of the probabilities of success for each option, but have estimated potential costs.

| Option        | State of Nature 1 (Normal) | State of Nature 2 (Adverse) | State of Nature 3 (Critical) |
| :------------ | :------------------------- | :-------------------------- | :--------------------------- |
| Option X      | $10,000                    | $15,000                     | $25,000                      |
| Option Y      | $12,000                    | $13,000                     | $20,000                      |

Using the MiniMax criterion (for cost minimization), which option should the project manager choose?

**Answer 2:**
We need to find the maximum cost for each option and then choose the option with the minimum of these maximum costs.

*   **Option X:**
    *   Max Cost = $25,000
*   **Option Y:**
    *   Max Cost = $20,000

The minimum of the maximum costs is $20,000 (from Option Y).
**Decision:** Choose Option Y.

---

**Question 3:**
Consider the following payoff table for three alternatives and three possible states of nature. You are a risk-averse decision-maker who wants to minimize potential regret.

| Alternative     | State of Nature A | State of Nature B | State of Nature C |
| :-------------- | :---------------- | :---------------- | :---------------- |
| Alternative 1   | $200              | $50               | $10               |
| Alternative 2   | $150              | $80               | $30               |
| Alternative 3   | $100              | $120              | $40               |

1.  Construct the Opportunity Loss (Regret) Table.
2.  Using the MiniMax Regret criterion, which alternative should you choose?

**Answer 3:**

1.  **Opportunity Loss (Regret) Table:**
    *   **State of Nature A:** Max Payoff = $200
        *   Regret(Alt 1) = $200 - $200 = $0
        *   Regret(Alt 2) = $200 - $150 = $50
        *   Regret(Alt 3) = $200 - $100 = $100
    *   **State of Nature B:** Max Payoff = $120
        *   Regret(Alt 1) = $120 - $50 = $70
        *   Regret(Alt 2) = $120 - $80 = $40
        *   Regret(Alt 3) = $120 - $120 = $0
    *   **State of Nature C:** Max Payoff = $40
        *   Regret(Alt 1) = $40 - $10 = $30
        *   Regret(Alt 2) = $40 - $30 = $10
        *   Regret(Alt 3) = $40 - $40 = $0

    **Opportunity Loss Table:**
    | Alternative     | State of Nature A | State of Nature B | State of Nature C |
    | :-------------- | :---------------- | :---------------- | :---------------- |
    | Alternative 1   | $0                | $70               | $30               |
    | Alternative 2   | $50               | $40               | $10               |
    | Alternative 3   | $100              | $0                | $0                |

2.  **Applying MiniMax Regret:**
    *   Maximum regret for Alternative 1 = $70
    *   Maximum regret for Alternative 2 = $50
    *   Maximum regret for Alternative 3 = $100

    The minimum of these maximum regrets is $50.
    **Decision:** Choose Alternative 2.

---

### Summary of Key Concepts

*   **Decision Making:** A systematic process of identifying and choosing among alternatives.
*   **Environments:** Certainty (known outcomes), Risk (known outcomes, known probabilities), Uncertainty (unknown outcomes, unknown probabilities).
*   **Decision Trees:** Graphical tools for sequential decision making under risk.
*   **EMV:** Expected Monetary Value, a technique for decisions under risk (maximize EMV for profit).
*   **EOL:** Expected Opportunity Loss, minimizes expected regret (minimize EOL).
*   **MaxiMin:** Pessimistic approach, chooses the best of the worst outcomes.
*   **MaxiMax:** Optimistic approach, chooses the best of the best outcomes.
*   **MiniMax:** Used for cost minimization, chooses the lowest of the worst costs.
*   **MiniMax Regret:** Minimizes the maximum potential regret.

---

This module provides engineers with foundational tools to approach decisions systematically, moving from recognizing a problem to implementing and evaluating a solution, especially when faced with incomplete information. The ability to quantify risks and analyze potential outcomes is crucial for effective engineering management.

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=uDlaoV2V-bU) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=A182z4Z_H3U) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
