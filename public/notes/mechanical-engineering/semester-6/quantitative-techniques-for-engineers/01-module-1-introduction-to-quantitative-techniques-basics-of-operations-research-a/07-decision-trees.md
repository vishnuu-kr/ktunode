---
title: "Decision trees"
subject: "QUANTITATIVE TECHNIQUES FOR ENGINEERS"
module: "Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications"
branch: "Mechanical Engineering"
semester: 6
topicId: "68a3fd1751d0cf4804463a63"
status: "completed"
scrapedAt: "2026-05-20T18:07:22.296Z"
---
# QUANTITATIVE TECHNIQUES FOR ENGINEERS

## Module 1: Introduction to Quantitative Techniques: Basics of Operations Research – Applications

### Topic: Decision Trees

---

### 1. Introduction to Decision Trees

Decision trees are a graphical and visual tool used in decision analysis to map out a decision and its potential consequences, including chance event outcomes, resource costs, and utility. They are particularly useful when dealing with a sequence of decisions and uncertain outcomes.

**Key Concepts:**

*   **Decision Point (Square Node):** Represents a point where a decision must be made.
*   **Chance Event (Circle Node):** Represents an event with uncertain outcomes, each having a specific probability.
*   **Outcome/End Point (Triangle Node):** Represents the final result of a sequence of decisions and chance events.
*   **Branches:** Lines connecting nodes, representing decisions or chance event outcomes.
*   **Probabilities:** Associated with the branches emanating from chance event nodes, summing up to 1 for all branches from a single node.
*   **Payoffs/Costs:** Values associated with the outcome branches, representing the benefit or cost of that particular path.

**Purpose in Operations Research:**

Decision trees help in:

*   Structuring complex decision-making problems.
*   Visualizing the flow of decisions and chance events.
*   Quantifying the expected value of different decision alternatives.
*   Identifying the optimal decision path by working backward from the outcomes.

**Relevance to Course Outcomes:**

This topic directly supports **CO2: To apply decision theory under various conditions of certainty, risk, and uncertainty.** Decision trees are a fundamental tool for decision-making under risk, where probabilities of different outcomes are known.

---

### 2. Constructing a Decision Tree

The process of constructing a decision tree involves a systematic approach:

1.  **Identify the Initial Decision:** Start with the first major decision to be made. This is represented by a square node.
2.  **Map Out Decision Alternatives:** From the decision node, draw branches representing each possible decision choice.
3.  **Introduce Chance Events:** If a decision leads to an uncertain event, follow the decision branch with a circle node representing the chance event.
4.  **Assign Probabilities:** For each branch emanating from a chance node, assign the probability of that outcome occurring. The sum of probabilities for all branches from a single chance node must equal 1.
5.  **Map Further Decisions/Outcomes:** Continue branching out for subsequent decisions or outcomes until all possible paths lead to a final outcome.
6.  **Assign Payoffs/Costs:** At the end of each terminal branch (outcome), assign the corresponding payoff or cost associated with that specific path.

**Example (Paneerselvam R., Third Edition, 2023, Chapter on Decision Theory):**

Suppose a company is deciding whether to launch a new product. The decision has two alternatives: "Launch" or "Don't Launch." If they "Launch," there's a 60% chance of success (high demand) and a 40% chance of failure (low demand). The payoffs are:

*   Success: $500,000
*   Failure: -$100,000 (loss)
*   Don't Launch: $0

**Decision Tree Structure:**

```
[Start]
   |
   v
[Decision: Launch New Product] (Square Node)
 /                \
/                  \
v                  v
[Launch] (Branch 1)   [Don't Launch] (Branch 2)
 /     \                   |
/       \                  |
v         v                v
[Success] [Failure]        [Outcome: $0] (Triangle Node)
(Circle Node) (Circle Node)
  |         |
  |         |
  v         v
[Payoff:   [Payoff:
$500,000]  -$100,000]
(Triangle Node)(Triangle Node)
```

**Probabilities:**

*   Branch from "Launch" to "Success": 0.60
*   Branch from "Launch" to "Failure": 0.40

---

### 3. Evaluating Decision Trees (Backward Induction)

The process of evaluating a decision tree involves calculating the expected monetary value (EMV) for each chance node and then working backward to determine the best decision at each decision point.

**Steps:**

1.  **Calculate EMV for Chance Nodes:** For each chance node, multiply the payoff of each outcome by its probability and sum these values. This gives the EMV of that chance node.
    *   $EMV(\text{Chance Node}) = \sum (\text{Payoff}_i \times \text{Probability}_i)$
2.  **Select Best Option at Decision Nodes:** At each decision node, compare the EMVs of the branches originating from it. Choose the branch with the highest EMV (for maximization problems) or the lowest cost (for minimization problems). Replace the decision node with its corresponding EMV.
3.  **Continue Backward:** Repeat steps 1 and 2, moving backward from the outcomes towards the initial decision node.
4.  **Determine the Optimal Strategy:** The EMV at the initial decision node represents the expected outcome of the optimal decision strategy.

**Example (Continuing from above):**

*   **EMV of "Success" branch:** $500,000
*   **EMV of "Failure" branch:** -$100,000
*   **EMV of "Launch" chance event:** $(0.60 \times \$500,000) + (0.40 \times -\$100,000) = \$300,000 - \$40,000 = \$260,000$
*   **EMV of "Don't Launch" branch:** $0

Now, at the initial decision node, compare the EMVs of "Launch" and "Don't Launch":

*   EMV (Launch) = $260,000
*   EMV (Don't Launch) = $0

Since $260,000 > 0$, the company should choose to "Launch" the new product. The EMV of the optimal strategy is $260,000.

---

### 4. Decision Trees with Multiple Stages

Decision trees can become quite complex when there are multiple sequential decisions and chance events. The backward induction process remains the same, but it needs to be applied iteratively for each decision stage.

**Consider the following scenario:**

A company is deciding whether to develop a new software product.
*   **Decision 1:** Develop or Not Develop.
    *   **Develop:** Costs $100,000.
        *   **Chance Event 1:** Market Research (50% chance of good outcome, 50% chance of poor outcome).
            *   **Good Market Research:** Leads to **Decision 2:** Launch or Don't Launch.
                *   **Launch:** 70% success ($500,000 profit), 30% failure (-$200,000 loss).
                *   **Don't Launch:** $0 profit.
            *   **Poor Market Research:** Leads to **Decision 2:** Launch or Don't Launch.
                *   **Launch:** 30% success ($100,000 profit), 70% failure (-$150,000 loss).
                *   **Don't Launch:** $0 profit.
    *   **Not Develop:** $0 profit.

**Evaluating this multi-stage tree using backward induction:**

**Stage 3: Outcomes from Decision 2 (after Good Market Research)**

*   **Launch:** EMV = $(0.70 \times \$500,000) + (0.30 \times -\$200,000) = \$350,000 - \$60,000 = \$290,000$
*   **Don't Launch:** EMV = $0$
*   **Decision 2 (Good Market Research):** Since $290,000 > 0$, choose "Launch." The EMV for this point is $290,000.

**Stage 3: Outcomes from Decision 2 (after Poor Market Research)**

*   **Launch:** EMV = $(0.30 \times \$100,000) + (0.70 \times -\$150,000) = \$30,000 - \$105,000 = -\$75,000$
*   **Don't Launch:** EMV = $0$
*   **Decision 2 (Poor Market Research):** Since $0 > -\$75,000$, choose "Don't Launch." The EMV for this point is $0.

**Stage 2: Outcomes from Chance Event 1 (Market Research)**

*   **Good Market Research:** Leads to a decision node with an EMV of $290,000 (from Stage 3 evaluation).
*   **Poor Market Research:** Leads to a decision node with an EMV of $0 (from Stage 3 evaluation).

Now, combine these with the initial development cost for the "Develop" option:

*   **Develop Option (considering Market Research):**
    *   EMV = $(0.50 \times \text{EMV of Good Market Research Decision}) + (0.50 \times \text{EMV of Poor Market Research Decision})$
    *   EMV = $(0.50 \times \$290,000) + (0.50 \times \$0) = \$145,000$
    *   **Net EMV of Development:** EMV (Develop) = EMV (Market Research) - Development Cost
    *   Net EMV (Develop) = $\$145,000 - \$100,000 = \$45,000$

**Stage 1: Initial Decision**

*   **Develop:** Net EMV = $45,000
*   **Not Develop:** EMV = $0$

Since $45,000 > 0$, the company should choose to "Develop" the software. The EMV of the optimal strategy is $45,000.

---

### 5. Applications of Decision Trees in Engineering

Decision trees are versatile tools used across various engineering disciplines:

*   **Project Management:** Deciding whether to proceed with a project, phased investments, or choosing between different project strategies.
*   **Product Development:** Evaluating the viability of new products, making go/no-go decisions at various development stages.
*   **Process Design:** Selecting the best process technology or operational strategy based on uncertain market conditions or technical risks.
*   **Resource Allocation:** Deciding how to allocate limited resources when facing uncertain demands or outcomes.
*   **Investment Decisions:** Evaluating capital expenditure proposals where outcomes are subject to market fluctuations or technological advancements.
*   **Risk Assessment:** Quantifying the potential impact of various risks on project success.

**References:**

*   **Paneerselvam R., Third Edition, 2023:** Likely covers decision trees in chapters related to decision analysis and its applications.
*   **Taha (Pearson, Tenth edition, 2019):** Taha's textbook is a comprehensive resource for Operations Research and will likely have detailed sections on decision trees within its decision analysis chapters.
*   **Hillier and Lieberman (McGraw Hill, Tenth edition, 2017):** This reference book will also provide a thorough treatment of decision trees, including their mathematical underpinnings and various applications.
*   **Banks, Carson, Nelson and Nicol (Pearson, Fifth edition, 2013) - Discrete Event System Simulation:** While this book focuses on simulation, decision trees can be used to guide simulation modeling decisions or to analyze the output of simulations when different scenarios are considered.

---

### 6. Important Points to Remember

*   **Clarity of Structure:** A well-drawn decision tree is crucial for accurate analysis. Ensure nodes and branches are clearly labeled.
*   **Accurate Probabilities:** The accuracy of the EMV depends heavily on the accuracy of the assigned probabilities. Use reliable data and expert judgment.
*   **Consistent Time Horizon:** Ensure all payoffs are considered over the same time frame to allow for meaningful comparisons.
*   **Discounting:** For long-term projects, it's often necessary to discount future payoffs to their present value to account for the time value of money. This adds another layer of complexity but is essential for realistic financial analysis.
*   **Sensitivity Analysis:** It's good practice to perform sensitivity analysis to see how the optimal decision might change if probabilities or payoffs are varied.
*   **Decision Criteria:** While EMV is common, other criteria like Expected Opportunity Loss (EOL) or utility functions can be used, especially when risk aversion is a factor.
*   **Bounded Rationality:** Decision trees assume a certain level of rationality in decision-making. In reality, human biases and cognitive limitations can influence choices.

---

### 7. Practice Questions and Exercises

**Question 1:**
A manufacturing company is deciding whether to invest in new machinery.
*   **Option A:** Invest in new machinery. Cost: $50,000.
    *   **Outcome 1:** High demand (60% probability). Annual profit increase: $20,000.
    *   **Outcome 2:** Low demand (40% probability). Annual profit increase: $5,000.
*   **Option B:** Do not invest. No cost. Annual profit increase: $0.

Calculate the Expected Monetary Value (EMV) for each option and recommend the best course of action. Assume a single period for simplicity.

**Answer 1:**

*   **Option A (Invest):**
    *   EMV = (0.60 * $20,000) + (0.40 * $5,000)
    *   EMV = $12,000 + $2,000 = $14,000
    *   Net EMV (after cost) = $14,000 - $50,000 = -$36,000

*   **Option B (Do not invest):**
    *   EMV = $0

**Recommendation:** Option B (Do not invest) is recommended as it has a higher EMV ( $0 vs -$36,000).

**Question 2:**
A civil engineer is considering two design options for a new bridge.
*   **Design X:** Initial cost $2,000,000.
    *   **Chance Event 1:** Load capacity testing.
        *   **Success (70% probability):** Lifetime cost $500,000.
        *   **Failure (30% probability):** Requires rework, additional cost $1,000,000.
*   **Design Y:** Initial cost $2,500,000.
    *   **Chance Event 1:** Load capacity testing.
        *   **Success (80% probability):** Lifetime cost $400,000.
        *   **Failure (20% probability):** Requires rework, additional cost $700,000.

Construct a decision tree and determine which design should be chosen based on minimizing expected total cost.

**Answer 2:**

**Decision Tree Structure and Calculations:**

**Design X:**
*   Initial Cost = $2,000,000

*   **Chance Event (Design X):**
    *   Success (70%): Total Cost = $2,000,000 (initial) + $500,000 (lifetime) = $2,500,000
    *   Failure (30%): Total Cost = $2,000,000 (initial) + $1,000,000 (rework) = $3,000,000

*   **EMV for Design X:**
    *   EMV(X) = (0.70 * $2,500,000) + (0.30 * $3,000,000)
    *   EMV(X) = $1,750,000 + $900,000 = $2,650,000

**Design Y:**
*   Initial Cost = $2,500,000

*   **Chance Event (Design Y):**
    *   Success (80%): Total Cost = $2,500,000 (initial) + $400,000 (lifetime) = $2,900,000
    *   Failure (20%): Total Cost = $2,500,000 (initial) + $700,000 (rework) = $3,200,000

*   **EMV for Design Y:**
    *   EMV(Y) = (0.80 * $2,900,000) + (0.20 * $3,200,000)
    *   EMV(Y) = $2,320,000 + $640,000 = $2,960,000

**Recommendation:** Since the objective is to minimize cost, Design X is recommended because its EMV ($2,650,000) is lower than the EMV for Design Y ($2,960,000).

---

### 8. Summary and Key Takeaways

*   Decision trees are powerful visual tools for structuring and analyzing decisions involving uncertainty.
*   They consist of decision nodes, chance nodes, branches, probabilities, and payoffs/costs.
*   Backward induction is the standard method for evaluating decision trees by calculating EMVs and working from outcomes to the initial decision.
*   The technique is crucial for applying decision theory under risk, directly supporting **CO2**.
*   Applications are widespread in engineering for project selection, process design, and resource allocation under uncertainty.
*   Accurate probability estimation and careful tree construction are vital for reliable results.
*   Consider incorporating financial concepts like discounting for long-term decisions and performing sensitivity analysis.

---

## Videos

| Resource Type | Recommended Video |
| :--- | :--- |
| ⚡ **Quick Concept** | [Watch Summary & Animations](https://www.youtube.com/watch?v=423c-v3_2X8) |
| 🎓 **Exam Deep Dive** | [Watch Comprehensive University Lecture](https://www.youtube.com/watch?v=r_GkEaC4T70) |
| ✍️ **Problem Solving** | [Watch Solved Examples & Numericals](https://www.youtube.com/watch?v=e_Nl2Q2yK8c) |
