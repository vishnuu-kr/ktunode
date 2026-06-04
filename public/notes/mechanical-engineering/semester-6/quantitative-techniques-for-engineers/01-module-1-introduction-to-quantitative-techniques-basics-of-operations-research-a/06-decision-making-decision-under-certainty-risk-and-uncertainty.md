---
title: "Decision Making: Decision under certainty, risk and uncertainty"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a62"
status: "completed"
scrapedAt: "2026-05-20T18:07:21.586Z"
---
## QUANTITATIVE TECHNIQUES FOR ENGINEERS

### Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications

#### Topic: Decision Making: Decision under Certainty, Risk, and Uncertainty

This module introduces the fundamental concepts of Operations Research (OR) and its applications. This topic specifically focuses on the crucial aspect of decision-making within the OR framework, exploring how engineers and managers make choices under different environmental conditions.

---

### Learning Outcomes Covered:

*   **Understanding Decision Making:** Comprehend the process of decision-making in engineering and business contexts.
*   **Types of Decision Environments:** Differentiate between decision-making under certainty, risk, and uncertainty.
*   **Decision Criteria:** Learn about various criteria used for making decisions under risk and uncertainty.
*   **Application of Decision Tools:** Understand how quantitative techniques can be applied to aid decision-making.

---

### Course Outcomes Addressed:

*   **CO2: To apply decision theory under various conditions of certainty, risk, and uncertainty. (Knowledge Level: K3)** - This topic directly contributes to this outcome by explaining and demonstrating the application of decision theory principles under different environmental conditions.

---

### Key Concepts and Definitions:

*   **Decision Making:** The process of identifying and choosing a course of action to achieve a desired outcome. It involves identifying a problem, gathering information, evaluating alternatives, and selecting the best option.
*   **Decision Problem:** A situation where a choice needs to be made among several possible alternatives, and the outcome of each choice is not fully known or predictable.
*   **Decision Alternatives (Actions):** The various courses of action or choices available to the decision-maker.
*   **States of Nature (Events):** Future conditions or occurrences that are outside the control of the decision-maker and that affect the outcome of the chosen action.
*   **Payoff:** The outcome or consequence of a particular decision alternative under a specific state of nature. This can be expressed in monetary terms (profit, cost) or other relevant measures.
*   **Decision Environment:** The context in which a decision is made, characterized by the degree of knowledge about the states of nature.

---

### Types of Decision Environments:

The classification of decision environments is based on the level of knowledge the decision-maker has about the states of nature.

#### 1. Decision Making Under Certainty

*   **Definition:** In this environment, there is only one possible state of nature, and its occurrence is known with absolute certainty. The outcome (payoff) of each decision alternative is known for sure.
*   **Characteristics:**
    *   The future is predictable.
    *   No probabilistic elements are involved.
    *   The decision-maker knows exactly what will happen for each chosen action.
*   **Decision Process:** The decision-maker simply chooses the alternative that yields the best payoff.
*   **Example:**
    *   A company decides to invest in a new machine. They know the exact cost of the machine and the exact revenue it will generate over its lifespan. There's no uncertainty about demand or operational costs.
    *   *Decision Alternative A:* Buy Machine X for $10,000, expected profit $15,000.
    *   *Decision Alternative B:* Buy Machine Y for $8,000, expected profit $12,000.
    *   **Decision:** Choose Machine X as it offers a higher profit.

#### 2. Decision Making Under Risk

*   **Definition:** In this environment, there are multiple possible states of nature, and their probabilities of occurrence are known or can be reliably estimated. The decision-maker knows the likelihood of each outcome.
*   **Characteristics:**
    *   The future is uncertain, but the probabilities of different events are known.
    *   This is a common scenario in business and engineering where historical data or market research can provide probability estimates.
*   **Decision Process:** Decision-makers typically use expected value (EV) or expected monetary value (EMV) as a criterion to choose the best alternative.
    *   **Expected Value (EV) / Expected Monetary Value (EMV):** The weighted average of the payoffs for each alternative, where the weights are the probabilities of the respective states of nature.
        $$EMV(\text{Alternative}) = \sum_{i=1}^{n} (\text{Payoff of Alternative under State of Nature } i \times P(\text{State of Nature } i))$$
*   **Example:**
    *   A manufacturing company is deciding whether to produce a new product. They estimate the demand for the product can be low, medium, or high, with associated probabilities.
    *   **Decision Alternatives:**
        *   Produce Product A
        *   Produce Product B
    *   **States of Nature (with probabilities):**
        *   Low Demand (P = 0.3)
        *   Medium Demand (P = 0.5)
        *   High Demand (P = 0.2)
    *   **Payoff Table (Profits in $1,000s):**

        | Decision Alternative | Low Demand (P=0.3) | Medium Demand (P=0.5) | High Demand (P=0.2) |
        | :------------------- | :----------------- | :-------------------- | :------------------ |
        | Produce Product A    | 50                 | 100                   | 150                 |
        | Produce Product B    | 80                 | 120                   | 100                 |

    *   **Calculating EMV:**
        *   EMV(Produce Product A) = (50 * 0.3) + (100 * 0.5) + (150 * 0.2) = 15 + 50 + 30 = **$95,000**
        *   EMV(Produce Product B) = (80 * 0.3) + (120 * 0.5) + (100 * 0.2) = 24 + 60 + 20 = **$104,000**
    *   **Decision:** Choose to produce Product B, as it has a higher EMV.

#### 3. Decision Making Under Uncertainty

*   **Definition:** In this environment, there are multiple possible states of nature, but their probabilities of occurrence are unknown or cannot be reliably estimated. The decision-maker has no information about the likelihood of each outcome.
*   **Characteristics:**
    *   The future is highly unpredictable.
    *   No probability assignments can be made to the states of nature.
    *   This often occurs in novel situations, new markets, or when dealing with unpredictable external factors.
*   **Decision Process:** Various decision criteria are used, each reflecting a different attitude towards risk and uncertainty:
    *   **Maximin (Pessimistic) Criterion:** Choose the alternative that maximizes the minimum possible payoff. This is a conservative approach, focusing on the worst-case scenario.
        *   For each alternative, find the minimum payoff.
        *   Choose the alternative with the highest minimum payoff.
    *   **Maximax (Optimistic) Criterion:** Choose the alternative that maximizes the maximum possible payoff. This is an aggressive approach, focusing on the best-case scenario.
        *   For each alternative, find the maximum payoff.
        *   Choose the alternative with the highest maximum payoff.
    *   **Minimax Regret (Opportunity Loss) Criterion:** Choose the alternative that minimizes the maximum possible regret (or opportunity loss). Regret is the difference between the payoff of the best possible decision under a given state of nature and the actual payoff of the chosen decision.
        *   **Step 1: Construct a Regret Table:**
            *   For each state of nature, identify the best possible payoff.
            *   For each decision alternative under that state of nature, calculate regret = (Best Payoff) - (Actual Payoff).
        *   **Step 2: Find Maximum Regret for Each Alternative:** For each decision alternative, find the maximum regret value in the regret table.
        *   **Step 3: Choose the Alternative with Minimum Maximum Regret:** Select the alternative that has the smallest maximum regret.
    *   **Laplace (Equally Likely) Criterion:** Assume all states of nature are equally likely and calculate the expected payoff for each alternative. Then, choose the alternative with the highest expected payoff. *Note: This criterion is generally not recommended when states of nature have inherently different likelihoods, even if unknown.*
        *   Calculate the average payoff for each alternative.
        *   Choose the alternative with the highest average payoff.

*   **Example (using the same payoff table from the Risk example):**
    *   **Payoff Table (Profits in $1,000s):**

        | Decision Alternative | Low Demand (Unknown P) | Medium Demand (Unknown P) | High Demand (Unknown P) |
        | :------------------- | :--------------------- | :------------------------ | :---------------------- |
        | Produce Product A    | 50                     | 100                       | 150                     |
        | Produce Product B    | 80                     | 120                       | 100                     |

    *   **Applying Decision Criteria:**

        *   **Maximin (Pessimistic):**
            *   Min Payoff for A = 50
            *   Min Payoff for B = 80
            *   **Decision:** Choose Produce Product B (maximizes the minimum payoff).

        *   **Maximax (Optimistic):**
            *   Max Payoff for A = 150
            *   Max Payoff for B = 120
            *   **Decision:** Choose Produce Product A (maximizes the maximum payoff).

        *   **Minimax Regret:**
            *   **Step 1: Construct Regret Table:**
                *   Best Payoff for Low Demand = 80 (from B)
                *   Best Payoff for Medium Demand = 120 (from B)
                *   Best Payoff for High Demand = 150 (from A)

                | Decision Alternative | Low Demand Regret | Medium Demand Regret | High Demand Regret |
                | :------------------- | :---------------- | :------------------- | :----------------- |
                | Produce Product A    | 80 - 50 = 30      | 120 - 100 = 20       | 150 - 150 = 0      |
                | Produce Product B    | 80 - 80 = 0       | 120 - 120 = 0        | 150 - 100 = 50     |

            *   **Step 2: Find Maximum Regret for Each Alternative:**
                *   Max Regret for A = 30
                *   Max Regret for B = 50

            *   **Step 3: Choose the Alternative with Minimum Maximum Regret:**
                *   **Decision:** Choose Produce Product A (minimizes the maximum regret).

        *   **Laplace (Equally Likely):**
            *   Average Payoff for A = (50 + 100 + 150) / 3 = 300 / 3 = 100
            *   Average Payoff for B = (80 + 120 + 100) / 3 = 300 / 3 = 100
            *   **Decision:** Indifferent between A and B, or further analysis is needed. (Note: This criterion often leads to ties when states of nature aren't truly equally likely.)

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=9GMBpZZtjXM) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |


### **Reference and Incorporation from Textbooks:**

*   **Paneerselvam R. (Third edition, 2023):** This textbook likely provides a foundational understanding of decision-making concepts, introducing the classifications of certainty, risk, and uncertainty with illustrative examples. It would emphasize the construction of payoff and regret tables and the calculation of expected values. (Refer to Chapters on Decision Theory).
*   **Taha (Tenth edition, 2019):** Taha's comprehensive approach would delve deeper into the mathematical formulations of decision criteria under uncertainty, such as the properties and theoretical underpinnings of maximin, maximax, and minimax regret. It might also discuss decision trees as a graphical method for sequential decision-making under risk. (Refer to Chapters on Decision Analysis and Decision Trees).
*   **Hillier & Lieberman (Tenth edition, 2017):** This reference book offers a rigorous treatment of decision analysis. It would likely present decision-making under uncertainty with a focus on game theory elements (though game theory is a separate topic, the "zero-sum" aspect of minimax regret shares similarities) and introduce concepts like utility theory as a more sophisticated approach to decision-making under risk, going beyond simple expected value. (Refer to Chapters on Decision Making under Uncertainty).
*   **Banks, Carson, Nelson & Nicol (Fifth edition, 2013):** While this book focuses on simulation, the principles of understanding uncertainty and the potential impact of different scenarios (states of nature) are relevant. Simulation can be used to estimate the probabilities and outcomes for complex systems when analytical methods are difficult, thereby aiding decisions under risk and uncertainty. (This book is less directly relevant to the core decision criteria but highlights the importance of modeling uncertainty).

---

### **Important Points to Remember:**

*   **The classification of the decision environment (certainty, risk, uncertainty) is crucial.** It dictates the tools and criteria you can use.
*   **Payoff tables are central to decision analysis.** Ensure accuracy in their construction.
*   **Expected Value (EMV) is the standard criterion for decision-making under risk.**
*   **Under uncertainty, there is no single "correct" criterion.** The choice depends on the decision-maker's attitude towards risk (pessimistic, optimistic, or averse to regret).
*   **Minimax Regret is often considered a more rational criterion under uncertainty** as it focuses on minimizing the potential "what if I had chosen differently" losses.
*   **Probabilities are key to distinguishing risk from uncertainty.** If probabilities are unknown, you are in an uncertainty situation.
*   **Decision trees are powerful tools for sequential decision-making problems** where a series of decisions and chance events occur over time.

---

### Practice Questions and Exercises:

**Question 1 (Decision under Risk):**
A firm is considering launching a new product. Market research indicates the following probabilities for market acceptance and the corresponding profits:

| Market Acceptance | Probability | Profit (in $ Million) |
| :---------------- | :---------- | :-------------------- |
| High              | 0.4         | 10                    |
| Medium            | 0.3         | 5                     |
| Low               | 0.3         | 1                     |

What is the Expected Monetary Value (EMV) of launching the product?

**Answer 1:**
EMV = (10 * 0.4) + (5 * 0.3) + (1 * 0.3)
EMV = 4.0 + 1.5 + 0.3
**EMV = $5.8 Million**

---

**Question 2 (Decision under Uncertainty - Maximin):**
A construction company is deciding which of three equipment types (A, B, or C) to purchase for a new project. The potential outcomes depend on the weather conditions during the construction period, which are uncertain.

| Equipment Type | Excellent Weather | Good Weather | Poor Weather |
| :------------- | :---------------- | :----------- | :----------- |
| A              | $500,000          | $200,000     | -$100,000    |
| B              | $600,000          | $150,000     | -$200,000    |
| C              | $400,000          | $300,000     | $0           |

Using the Maximin criterion, which equipment type should the company choose?

**Answer 2:**
*   Min payoff for A = -$100,000
*   Min payoff for B = -$200,000
*   Min payoff for C = $0

The Maximin criterion maximizes the minimum payoff. Therefore, the company should choose **Equipment Type C**.

---

**Question 3 (Decision under Uncertainty - Minimax Regret):**
Using the same payoff table from Question 2, construct a regret table and determine which equipment type the company should choose using the Minimax Regret criterion.

**Answer 3:**
*   **Step 1: Construct Regret Table:**
    *   Best payoff for Excellent Weather = $600,000 (from B)
    *   Best payoff for Good Weather = $300,000 (from C)
    *   Best payoff for Poor Weather = $0 (from C)

    | Equipment Type | Excellent Weather Regret | Good Weather Regret | Poor Weather Regret |
    | :------------- | :----------------------- | :------------------ | :------------------ |
    | A              | 600,000 - 500,000 = 100,000 | 300,000 - 200,000 = 100,000 | 0 - (-100,000) = 100,000 |
    | B              | 600,000 - 600,000 = 0   | 300,000 - 150,000 = 150,000 | 0 - (-200,000) = 200,000 |
    | C              | 600,000 - 400,000 = 200,000 | 300,000 - 300,000 = 0     | 0 - 0 = 0           |

*   **Step 2: Find Maximum Regret for Each Alternative:**
    *   Max Regret for A = 100,000
    *   Max Regret for B = 200,000
    *   Max Regret for C = 200,000

*   **Step 3: Choose the Alternative with Minimum Maximum Regret:**
    The minimum maximum regret is 100,000. Therefore, the company should choose **Equipment Type A**.

---

### Further Study:

*   Explore decision trees for more complex sequential decision problems.
*   Investigate utility theory as an alternative to EMV for decision-making under risk, especially when risk aversion is a factor.
*   Understand how sensitivity analysis can be applied to decision problems to see how changes in probabilities or payoffs affect the optimal decision.

---