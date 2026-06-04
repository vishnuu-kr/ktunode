---
title: "Internal Rate of Return (IRR) – Economic Decision Making using Incremental Rate of Return (IRoR) Analysis of public projects – Benefit cost analysis – applications."
subject: "FINANCE FOR ENGINEERING"
module: "Module 2: Rate of Return method – Minimum attractive rate of return (MARR)"
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba811827"
status: "completed"
scrapedAt: "2026-05-20T18:58:40.592Z"
---
# Finance for Engineering: Module 2 - Rate of Return Method

## Topic: Internal Rate of Return (IRR) – Economic Decision Making using Incremental Rate of Return (IRoR) Analysis of Public Projects – Benefit Cost Analysis – Applications

### **Learning Outcomes:**

*   Understand the concept of Internal Rate of Return (IRR).
*   Apply the IRR method for economic decision making.
*   Understand the concept of Incremental Rate of Return (IRoR).
*   Analyze public projects using IRoR.
*   Understand Benefit-Cost Analysis (BCA).
*   Apply BCA principles to public projects.
*   Recognize various applications of these methods in engineering.

---

## 1. Internal Rate of Return (IRR)

### **1.1. Key Concepts and Definitions**

*   **Definition:** The Internal Rate of Return (IRR) is the **discount rate** at which the Net Present Worth (NPW) of a project's cash flows equals zero. In simpler terms, it's the effective rate of return that a project is expected to generate.
*   **NPW Equation:**
    $$ \text{NPW} = \sum_{t=0}^{n} \frac{CF_t}{(1+i)^t} = 0 $$
    Where:
    *   $CF_t$ = Cash flow at time $t$ (can be positive for inflows or negative for outflows)
    *   $i$ = Discount rate (IRR in this case)
    *   $n$ = Project life
*   **Decision Rule:**
    *   If **IRR > MARR (Minimum Attractive Rate of Return)**, the project is considered economically viable and should be accepted.
    *   If **IRR < MARR**, the project should be rejected.
    *   If **IRR = MARR**, the project is at the breakeven point; the decision might depend on other factors.

### **1.2. Calculating IRR**

*   **Direct Calculation (Algebraic):** This is only feasible for very simple cash flow patterns (e.g., single initial investment and a constant annual return). For most real-world projects with irregular cash flows, direct calculation is impossible.
*   **Trial and Error:** This is a common method where you test different discount rates until you find the one that makes NPW approximately zero.
    1.  Start with an assumed discount rate (e.g., the MARR). Calculate the NPW.
    2.  If the NPW is positive, the IRR is higher than the assumed rate. Increase the discount rate.
    3.  If the NPW is negative, the IRR is lower than the assumed rate. Decrease the discount rate.
    4.  Continue this process until the NPW is close to zero.
*   **Interpolation:** Once you have two discount rates that give NPWs of opposite signs, you can use linear interpolation to estimate the IRR.
    $$ \text{IRR} = i_1 + \frac{\text{NPW}_1}{\text{NPW}_1 - \text{NPW}_2} \times (i_2 - i_1) $$
    Where:
    *   $i_1$ = Lower discount rate with NPW$_1$ > 0
    *   $i_2$ = Higher discount rate with NPW$_2$ < 0
*   **Financial Calculators and Spreadsheet Software (e.g., Excel's IRR function):** These are the most practical and accurate methods for calculating IRR in engineering practice.

### **1.3. Examples of IRR Calculation**

**Example 1: Simple Project**

A project requires an initial investment of $10,000 and is expected to generate cash inflows of $3,000 per year for 5 years. If the MARR is 10%, what is the IRR?

*   **NPW equation:**
    $$ -10,000 + 3,000(P/A, i, 5) = 0 $$
    $$ 10,000 = 3,000 \times \frac{1 - (1+i)^{-5}}{i} $$
    $$ \frac{10,000}{3,000} = \frac{1 - (1+i)^{-5}}{i} $$
    $$ 3.333 = \frac{1 - (1+i)^{-5}}{i} $$

*   **Trial and Error:**
    *   **Try i = 10%:**
        $P/A = \frac{1 - (1.10)^{-5}}{0.10} = \frac{1 - 0.6209}{0.10} = 3.791$
        NPW = $3,000 \times 3.791 - 10,000 = 11,373 - 10,000 = 1,373$ (Positive)
    *   **Try i = 15%:**
        $P/A = \frac{1 - (1.15)^{-5}}{0.15} = \frac{1 - 0.4972}{0.15} = 3.352$
        NPW = $3,000 \times 3.352 - 10,000 = 10,056 - 10,000 = 56$ (Positive, but closer to zero)
    *   **Try i = 16%:**
        $P/A = \frac{1 - (1.16)^{-5}}{0.16} = \frac{1 - 0.4761}{0.16} = 3.275$
        NPW = $3,000 \times 3.275 - 10,000 = 9,825 - 10,000 = -175$ (Negative)

*   **Interpolation:**
    $$ \text{IRR} = 15\% + \frac{56}{56 - (-175)} \times (16\% - 15\%) $$
    $$ \text{IRR} = 15\% + \frac{56}{231} \times 1\% $$
    $$ \text{IRR} \approx 15\% + 0.24\% = 15.24\% $$

*   **Decision:** Since IRR (15.24%) > MARR (10%), the project is economically viable.

**Example 2: Using Excel**

For the same cash flows as Example 1:
Initial Investment: -$10,000
Year 1-5: $3,000

In Excel, enter these values in cells, say A1 to A6:
A1: -10000
A2: 3000
A3: 3000
A4: 3000
A5: 3000
A6: 3000

In another cell, type `=IRR(A1:A6)` which will return approximately 15.24%.

### **1.4. Advantages and Disadvantages of IRR**

**Advantages:**

*   **Intuitive:** Directly expresses the return rate of an investment, which is easily understood by managers.
*   **No need to specify MARR:** The IRR is an inherent property of the project's cash flows.
*   **Widely used:** A common metric in financial analysis.

**Disadvantages:**

*   **Multiple IRRs:** For projects with non-conventional cash flows (i.e., more than one sign change in cash flows), there can be multiple IRRs, making interpretation difficult.
*   **IRR vs. NPW for mutually exclusive projects:** When comparing mutually exclusive projects of different scales or durations, IRR can sometimes lead to incorrect decisions compared to NPW. This is because IRR assumes reinvestment of cash flows at the IRR itself, whereas NPW assumes reinvestment at the MARR.
*   **Reinvestment Assumption:** Assumes that all interim cash flows are reinvested at the IRR, which might not be realistic.

---

## 2. Economic Decision Making using Incremental Rate of Return (IRoR)

### **2.1. Key Concepts and Definitions**

*   **Purpose:** IRoR analysis is used to compare **mutually exclusive alternatives** when the MARR is known. It helps decide which project offers the best incremental return over its competitor.
*   **Incremental Cash Flows:** These are the differences in cash flows between two alternatives.
    $$ \Delta CF_t = CF_{A,t} - CF_{B,t} $$
    Where:
    *   $\Delta CF_t$ = Incremental cash flow at time $t$
    *   $CF_{A,t}$ = Cash flow of Alternative A at time $t$
    *   $CF_{B,t}$ = Cash flow of Alternative B at time $t$
*   **Incremental Rate of Return (IRoR):** The IRR of the **incremental cash flows** between two alternatives. It represents the additional rate of return earned by investing more capital to choose the higher-cost/higher-benefit alternative.
*   **Decision Rule for Comparing Alternatives:**
    1.  **Rank alternatives:** Order the alternatives from the lowest initial investment (or lowest cost) to the highest.
    2.  **Calculate incremental cash flows:** Determine the difference in cash flows between each consecutive pair of alternatives.
    3.  **Calculate IRoR for each incremental cash flow stream:** Find the IRR of these incremental cash flows.
    4.  **Compare IRoR with MARR:**
        *   If **IRoR > MARR**, the higher-investment alternative is preferred over the lower-investment one.
        *   If **IRoR < MARR**, the lower-investment alternative is preferred.
    5.  **Decision on the best alternative:** Proceed down the ranked list, accepting incremental investments only if their IRoR exceeds the MARR. The last alternative that meets this criterion is the preferred choice.

### **2.2. IRoR Analysis Steps**

1.  **Identify Alternatives:** Define the mutually exclusive projects or options.
2.  **Estimate Cash Flows:** Determine the initial investment, operating costs, revenues, and salvage values for each alternative over their life cycles.
3.  **Calculate Incremental Cash Flows:** Subtract the cash flows of the lower-investment alternative from the cash flows of the higher-investment alternative for each time period.
4.  **Calculate IRoR:** Use trial and error, interpolation, or software to find the IRR of the incremental cash flows.
5.  **Compare IRoR to MARR:** Apply the decision rule.

### **2.3. Example of IRoR Analysis**

**Example:** An engineering firm is choosing between two mutually exclusive tunnel boring machines (A and B).

| Feature             | Machine A   | Machine B   |
| :------------------ | :---------- | :---------- |
| Initial Cost        | $50,000      | $80,000      |
| Annual Operating Cost | $10,000      | $7,000       |
| Life (Years)        | 10          | 10          |
| Salvage Value       | $5,000       | $8,000       |
| MARR                | 12%         |             |

**Step 1: Rank Alternatives**
Machine A has a lower initial cost than Machine B.

**Step 2: Calculate Incremental Cash Flows (B - A)**

| Year | Machine B Cash Flow | Machine A Cash Flow | Incremental Cash Flow ($B - A$) |
| :--- | :------------------ | :------------------ | :------------------------------- |
| 0    | -$80,000            | -$50,000            | -$30,000                         |
| 1-9  | -$7,000             | -$10,000            | +$3,000                          |
| 10   | -$7,000 + $8,000    | -$10,000 + $5,000   | +$3,000 + $3,000 = +$6,000       |

*Interpretation of Incremental Cash Flows:* Choosing Machine B over Machine A requires an additional upfront investment of $30,000. However, it saves $3,000 per year in operating costs for 9 years and an additional $3,000 saving (plus higher salvage value) in year 10.

**Step 3: Calculate IRoR of Incremental Cash Flows**
We need to find the discount rate ($i$) where:
$$ -30,000 + 3,000(P/A, i, 9) + 3,000(P/F, i, 10) = 0 $$
Or, using annual worth:
$$ -30,000(A/P, i, 10) + 3,000 + 3,000(A/F, i, 10) = 0 $$

Let's use trial and error:

*   **Try i = 10%:**
    $A/P = \frac{0.10(1.10)^{10}}{(1.10)^{10} - 1} = \frac{0.10 \times 2.5937}{1.5937} = 0.16275$
    $A/F = \frac{0.10}{(1.10)^{10} - 1} = \frac{0.10}{1.5937} = 0.06275$
    PW of Incremental Costs = $30,000(0.16275) = 4,882.5$
    PW of Incremental Savings = $3,000 + 3,000(0.06275) = 3,000 + 188.25 = 3,188.25$
    Net Present Worth = $3,188.25 - 4,882.5 = -1,694.25$ (Negative)

*   **Try i = 8%:**
    $A/P = \frac{0.08(1.08)^{10}}{(1.08)^{10} - 1} = \frac{0.08 \times 2.1589}{1.1589} = 0.14903$
    $A/F = \frac{0.08}{(1.08)^{10} - 1} = \frac{0.08}{1.1589} = 0.06896$
    PW of Incremental Costs = $30,000(0.14903) = 4,470.9$
    PW of Incremental Savings = $3,000 + 3,000(0.06896) = 3,000 + 206.88 = 3,206.88$
    Net Present Worth = $3,206.88 - 4,470.9 = -1,264.02$ (Negative)

*   **Try i = 5%:**
    $A/P = \frac{0.05(1.05)^{10}}{(1.05)^{10} - 1} = \frac{0.05 \times 1.6289}{0.6289} = 0.12949$
    $A/F = \frac{0.05}{(1.05)^{10} - 1} = \frac{0.05}{0.6289} = 0.07952$
    PW of Incremental Costs = $30,000(0.12949) = 3,884.7$
    PW of Incremental Savings = $3,000 + 3,000(0.07952) = 3,000 + 238.56 = 3,238.56$
    Net Present Worth = $3,238.56 - 3,884.7 = -646.14$ (Negative)

*   **Using Excel IRR function for incremental cash flows (-30000, 3000, 3000, ..., 3000, 6000):**
    Let's assume the cash flows are in cells C1 to C11:
    C1: -30000
    C2: 3000
    ...
    C10: 3000
    C11: 6000
    `=IRR(C1:C11)` results in approximately **1.74%**.

**Step 4: Compare IRoR to MARR**
IRoR (1.74%) < MARR (12%)

**Step 5: Decision**
Since the IRoR (1.74%) is less than the MARR (12%), the incremental investment in Machine B is not justified. Therefore, Machine A (the lower-cost alternative) is preferred.

---

## 3. Public Projects – Benefit-Cost Analysis (BCA)

### **3.1. Key Concepts and Definitions**

*   **Public Projects:** Projects undertaken by government entities or non-profit organizations, often aimed at providing public goods and services (e.g., infrastructure, public health, environmental protection).
*   **Challenges in Public Projects:**
    *   Lack of clear profit motive.
    *   Difficulty in quantifying all benefits and costs.
    *   Multiple stakeholders with diverse interests.
    *   Long project lifespans and broad societal impacts.
*   **Benefit-Cost Analysis (BCA):** A systematic process used to compare the total expected benefits of a project against its total expected costs. It is a widely used method for evaluating the economic feasibility and desirability of public projects.
*   **Key Metrics in BCA:**
    *   **Benefits (B):** Positive impacts of a project that are valued by society. These can be tangible (e.g., reduced travel time, increased output) or intangible (e.g., improved safety, environmental quality).
    *   **Costs (C):** Negative impacts or resources consumed by a project. These include initial capital costs, operating and maintenance costs, and any negative externalities.
    *   **Discount Rate (Social Discount Rate):** Used to convert future benefits and costs to their present values. Public projects often use a social discount rate, which reflects society's time preference and the opportunity cost of public funds. This rate can differ from the MARR used for private projects.
    *   **Benefit-Cost Ratio (BCR):** The ratio of the present worth of benefits to the present worth of costs.
        $$ \text{BCR} = \frac{\text{PW of Benefits}}{\text{PW of Costs}} $$
    *   **Decision Rule for BCR:**
        *   If **BCR > 1**, the project's benefits outweigh its costs, and it is considered economically justified.
        *   If **BCR < 1**, the costs outweigh the benefits, and the project should be rejected.
        *   If **BCR = 1**, the project is at the breakeven point.

### **3.2. BCA Steps**

1.  **Define the Project Scope and Alternatives:** Clearly identify the project and any feasible alternatives.
2.  **Identify and Quantify All Benefits:** List all positive impacts and attempt to assign a monetary value to them. This includes direct benefits, indirect benefits, and intangible benefits (which may require proxy measures).
3.  **Identify and Quantify All Costs:** List all negative impacts, including capital costs, operating costs, maintenance costs, and any negative externalities.
4.  **Determine the Project Life and Discount Rate:** Establish the relevant time horizon for the analysis and select an appropriate social discount rate.
5.  **Calculate Present Worth of Benefits (PW$_B$) and Present Worth of Costs (PW$_C$):** Discount all future benefits and costs back to the present using the chosen discount rate.
6.  **Calculate the Benefit-Cost Ratio (BCR):** Divide PW$_B$ by PW$_C$.
7.  **Make a Decision:** Based on the BCR and other relevant criteria, decide whether to proceed with the project. For selecting among multiple projects, rank them by BCR (higher is better).

### **3.3. Key Considerations in BCA**

*   **Quantification of Intangibles:** This is a significant challenge. Techniques like willingness-to-pay surveys or cost-of-illness studies can be used.
*   **Distributional Effects:** BCA primarily focuses on net economic efficiency. It may not capture how benefits and costs are distributed across different population groups.
*   **Environmental and Social Impacts:** These often need to be explicitly considered alongside the quantitative BCA.
*   **Sensitivity Analysis:** Analyzing how changes in key assumptions (e.g., discount rate, benefit/cost estimates) affect the outcome is crucial.
*   **Mutually Exclusive Alternatives:** Similar to IRoR, when comparing mutually exclusive public projects, the incremental benefit-cost ratio (iBCR) is used. The iBCR is the BCR of the incremental cash flows between two ranked alternatives. If iBCR > 1, the higher-cost/higher-benefit alternative is preferred.

### **3.4. Example of Benefit-Cost Analysis**

**Example:** A city is considering building a new public park.

| Item              | Description                                     | Estimated Value (Annual, Year 1-20) |
| :---------------- | :---------------------------------------------- | :---------------------------------- |
| **Benefits**      |                                                 |                                     |
| Increased Leisure | Value of recreational opportunities for citizens | $500,000                            |
| Improved Air Quality | Monetized value of reduced pollution         | $100,000                            |
| Increased Property Values | Lift in nearby property values             | $150,000                            |
| **Costs**         |                                                 |                                     |
| Construction      | Initial outlay (Year 0)                         | $2,000,000                          |
| Maintenance       | Annual upkeep                                   | $80,000                             |
| Operating Costs   | Staffing, utilities                             | $50,000                             |

*   **Project Life:** 20 years
*   **Social Discount Rate:** 5%

**Calculations:**

1.  **Total Annual Benefits (B):** $500,000 + $100,000 + $150,000 = $750,000
2.  **Total Annual Costs (C$_{ops}$):** $80,000 + $50,000 = $130,000
3.  **Initial Cost (C$_{initial}$):** $2,000,000

*   **Calculate Present Worth of Benefits (PW$_B$):**
    This is an annuity for 20 years.
    $$ \text{PW}_B = 750,000 \times (P/A, 5\%, 20) $$
    $$ (P/A, 5\%, 20) = \frac{1 - (1.05)^{-20}}{0.05} = \frac{1 - 0.3769}{0.05} = 12.462 $$
    $$ \text{PW}_B = 750,000 \times 12.462 = 9,346,500 $$

*   **Calculate Present Worth of Costs (PW$_C$):**
    This includes the initial cost plus the present worth of annual operating costs.
    $$ \text{PW}_C = C_{initial} + C_{ops} \times (P/A, 5\%, 20) $$
    $$ \text{PW}_C = 2,000,000 + 130,000 \times 12.462 $$
    $$ \text{PW}_C = 2,000,000 + 1,620,060 = 3,620,060 $$

*   **Calculate Benefit-Cost Ratio (BCR):**
    $$ \text{BCR} = \frac{\text{PW}_B}{\text{PW}_C} = \frac{9,346,500}{3,620,060} \approx 2.58 $$

**Decision:**
Since the BCR (2.58) is greater than 1, the project is economically justified. The benefits are estimated to be 2.58 times the costs.

---

## 4. Applications

These methods are crucial for making sound economic decisions in various engineering contexts:

*   **Infrastructure Projects:** Evaluating highways, bridges, dams, water treatment plants, and public transportation systems.
    *   *Example:* Using BCA to determine if the benefits of a new highway (reduced travel time, fewer accidents) outweigh its construction and maintenance costs.
*   **Energy Projects:** Assessing the economic viability of power plants, renewable energy installations, and energy efficiency upgrades.
    *   *Example:* Using IRR to compare the return on investment for solar panel installation versus a traditional energy source.
*   **Environmental Projects:** Evaluating pollution control measures, waste management systems, and conservation efforts.
    *   *Example:* Using BCA to justify investing in a wastewater treatment plant that reduces pollution, even if direct revenue is not generated.
*   **Manufacturing and Process Improvement:** Selecting equipment, designing production lines, and implementing new technologies.
    *   *Example:* Using IRoR analysis to choose between two different manufacturing machines that achieve the same output but have different initial costs and operating efficiencies.
*   **Public Safety and Health Initiatives:** Assessing the economic benefits of safety regulations, public health campaigns, and emergency response systems.
    *   *Example:* Using BCA to evaluate the cost-effectiveness of installing traffic calming measures to reduce accidents.

---

## Important Points to Remember:

*   **IRR vs. MARR:** The fundamental decision rule for a single project is to accept it if IRR > MARR.
*   **IRoR for Mutually Exclusive Projects:** When comparing alternatives, IRoR is used to decide between them. Accept the incremental investment if IRoR > MARR.
*   **BCA for Public Projects:** BCR is the primary metric, with acceptance if BCR > 1.
*   **Reinvestment Assumption:** IRR assumes reinvestment at the IRR rate, which can be a limitation. NPW assumes reinvestment at MARR, which is generally considered more realistic for project selection.
*   **Mutually Exclusive Project Conflict:** In cases of mutually exclusive projects, NPW often provides a more reliable decision criterion than IRR, especially when projects differ significantly in scale or life. IRoR addresses this by focusing on the incremental return.
*   **Quantification is Key:** The accuracy of these analyses heavily relies on the accuracy of the estimated cash flows, benefits, and costs.
*   **Non-conventional Cash Flows:** Be cautious with IRR when cash flows change signs more than once; multiple IRRs can exist.
*   **Social Discount Rate:** Public projects require careful consideration of the appropriate social discount rate.

---

## Practice Questions

**Question 1:**
A project has an initial investment of $50,000 and is expected to generate net cash flows of $15,000 per year for 5 years. If the MARR is 10%, what is the IRR of this project? (Round to one decimal place).

**Question 2:**
Company A is considering two mutually exclusive projects, X and Y.
Project X: Initial Cost = $100,000, Annual Net Cash Flow = $30,000 for 5 years.
Project Y: Initial Cost = $150,000, Annual Net Cash Flow = $40,000 for 5 years.
If the MARR is 12%, use IRoR analysis to recommend which project should be chosen.

**Question 3:**
A city is evaluating a project to improve bicycle lanes.
**Benefits (annual, 15 years):**
*   Reduced traffic congestion: $200,000
*   Improved public health: $50,000
**Costs:**
*   Initial Construction: $1,500,000
*   Annual Maintenance: $30,000
The social discount rate is 6%. Calculate the Benefit-Cost Ratio (BCR) for this project.

---

## Answers to Practice Questions

**Answer 1:**
We need to find the IRR such that:
$$ -50,000 + 15,000 \times (P/A, i, 5) = 0 $$
$$ \frac{50,000}{15,000} = (P/A, i, 5) $$
$$ 3.333 = \frac{1 - (1+i)^{-5}}{i} $$

Using trial and error or a financial calculator/Excel:
*   At 14%: $(P/A, 14\%, 5) = 3.433$ (NPW = $15,000 \times 3.433 - 50,000 = 51,495 - 50,000 = 1,495$, positive)
*   At 16%: $(P/A, 16\%, 5) = 3.274$ (NPW = $15,000 \times 3.274 - 50,000 = 49,110 - 50,000 = -890$, negative)

Using interpolation:
$$ \text{IRR} = 14\% + \frac{1495}{1495 - (-890)} \times (16\% - 14\%) $$
$$ \text{IRR} = 14\% + \frac{1495}{2385} \times 2\% $$
$$ \text{IRR} \approx 14\% + 0.627 \times 2\% \approx 14\% + 1.25\% = 15.25\% $$
**Answer:** The IRR is approximately **15.3%**. Since IRR (15.3%) > MARR (10%), the project is acceptable.

**Answer 2:**
**Incremental Cash Flows (Y - X):**
*   Initial Investment: $150,000 - $100,000 = $50,000
*   Annual Net Cash Flow: $40,000 - $30,000 = $10,000 for 5 years.

We need to find the IRoR for the incremental cash flows ($50,000$ initial outflow, $10,000$ annual inflow for 5 years).
$$ -50,000 + 10,000 \times (P/A, i, 5) = 0 $$
$$ \frac{50,000}{10,000} = (P/A, i, 5) $$
$$ 5.000 = (P/A, i, 5) $$

*   At 4%: $(P/A, 4\%, 5) = 4.452$
*   At 2%: $(P/A, 2\%, 5) = 4.712$
*   At 0%: $(P/A, 0\%, 5) = 5.000$

The exact IRoR is 0%.
**IRoR = 0%**

**Decision:**
Since IRoR (0%) < MARR (12%), the incremental investment in Project Y is not justified. Therefore, **Project X should be chosen.**

**Answer 3:**
1.  **Total Annual Benefits:** $200,000 + $50,000 = $250,000
2.  **Total Annual Costs (Operating):** $30,000
3.  **Initial Cost:** $1,500,000
4.  **Project Life:** 15 years
5.  **Discount Rate:** 6%

*   **Present Worth of Benefits (PW$_B$):**
    $$ \text{PW}_B = 250,000 \times (P/A, 6\%, 15) $$
    $$ (P/A, 6\%, 15) = \frac{1 - (1.06)^{-15}}{0.06} = \frac{1 - 0.4173}{0.06} = 9.712 $$
    $$ \text{PW}_B = 250,000 \times 9.712 = 2,428,000 $$

*   **Present Worth of Costs (PW$_C$):**
    $$ \text{PW}_C = 1,500,000 + 30,000 \times (P/A, 6\%, 15) $$
    $$ \text{PW}_C = 1,500,000 + 30,000 \times 9.712 $$
    $$ \text{PW}_C = 1,500,000 + 291,360 = 1,791,360 $$

*   **Benefit-Cost Ratio (BCR):**
    $$ \text{BCR} = \frac{\text{PW}_B}{\text{PW}_C} = \frac{2,428,000}{1,791,360} \approx 1.355 $$

**Answer:** The BCR is approximately **1.36**. Since BCR > 1, the project is economically justified.
