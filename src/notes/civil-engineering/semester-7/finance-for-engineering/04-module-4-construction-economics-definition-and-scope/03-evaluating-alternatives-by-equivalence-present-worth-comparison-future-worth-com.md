---
title: "Evaluating alternatives by equivalence – Present worth comparison – Future worth comparison – Annual cost and worth comparison."
subject: "FINANCE FOR ENGINEERING"
module: "Module 4: Construction Economics – Definition and scope."
branch: "Civil Engineering"
semester: 7
topicId: "689f15d056b5e963ba81182f"
status: "completed"
scrapedAt: "2026-05-20T18:58:45.080Z"
---
# FINANCE FOR ENGINEERING - Module 4: Construction Economics

## Topic: Evaluating Alternatives by Equivalence

This module introduces the fundamental concept of **equivalence** in engineering economics, which allows us to compare mutually exclusive alternatives on an equal footing by bringing all their cash flows to a common point in time. This is crucial for making sound investment decisions in construction projects.

### 1. Introduction to Equivalence

**Key Concept:** Equivalence states that sums of money of different amounts at different points in time can be equal in economic value. This is due to the **time value of money**, meaning that a dollar today is worth more than a dollar in the future because of its potential earning capacity.

**Purpose of Equivalence:** To compare alternatives with different cash flow patterns, magnitudes, and timings. By bringing all costs and benefits to a common point, we can determine which alternative offers the best economic outcome.

**Interest Rate (i):** The rate at which money grows over time. This is also known as the discount rate, hurdle rate, or cost of capital. It reflects the opportunity cost of investing in a project.

### 2. Methods of Evaluating Alternatives by Equivalence

There are three primary methods to evaluate alternatives by equivalence:

*   **Present Worth (PW) Comparison:** Bringing all cash flows to the present time (time 0).
*   **Future Worth (FW) Comparison:** Bringing all cash flows to a future point in time (often the end of the project's life).
*   **Annual Cost/Worth (AC/AW) Comparison:** Converting all cash flows to an equivalent uniform annual series over the life of the alternatives.

We will explore each of these in detail.

---

### 3. Present Worth (PW) Comparison

**Definition:** The Present Worth (PW) of an alternative is the equivalent value of all its future cash flows (costs and benefits) expressed at the present time (time 0).

**How it Works:**
*   **Costs:** Future costs are discounted back to the present using the interest rate.
*   **Benefits:** Future benefits are also discounted back to the present.
*   **Net Present Worth (NPW):** The difference between the present worth of benefits and the present worth of costs.

**Formula:**

$$
PW = \sum_{t=0}^{n} A_t (1+i)^{-t}
$$

Where:
*   $PW$ = Present Worth
*   $A_t$ = Cash flow at time $t$
*   $i$ = Interest rate (per period)
*   $n$ = Number of periods
*   $(1+i)^{-t}$ = Discount factor

**Decision Rule:**
*   When comparing mutually exclusive alternatives, select the alternative with the **highest (least negative) Net Present Worth (NPW)**.
*   If the NPW is positive, the project is economically viable. If it's negative, the project should be rejected.

**Example 1: Simple PW Calculation**

A company is considering purchasing a new piece of machinery.
*   Initial Cost (Year 0): \$50,000
*   Annual Maintenance Cost (Years 1-5): \$5,000
*   Salvage Value (End of Year 5): \$10,000
*   Interest Rate: 10% per year

**Calculation:**

*   **Present Worth of Initial Cost:** \$50,000 (already at present)
*   **Present Worth of Maintenance Costs:**
    This is a uniform series of payments. We use the present worth of an annuity factor.
    $PW_{annuity} = A \times \frac{(1+i)^n - 1}{i(1+i)^n}$
    $PW_{maintenance} = \$5,000 \times \frac{(1+0.10)^5 - 1}{0.10(1+0.10)^5} = \$5,000 \times 3.7908 = \$18,954$
*   **Present Worth of Salvage Value:**
    This is a single future sum. We use the present worth of a single sum factor.
    $PW_{single} = F \times (1+i)^{-n}$
    $PW_{salvage} = \$10,000 \times (1+0.10)^{-5} = \$10,000 \times 0.6209 = \$6,209$

*   **Total Present Worth of Costs:** \$50,000 + \$18,954 = \$68,954
*   **Total Present Worth of Benefits (Salvage):** \$6,209
*   **Net Present Worth (NPW):** \$6,209 - \$68,954 = -\$62,745

Since the NPW is negative, this investment is not economically favorable at a 10% interest rate.

**Example 2: Comparing Alternatives with PW**

**Alternative A:**
*   Initial Cost: \$100,000
*   Annual Savings: \$30,000 per year for 10 years
*   Interest Rate: 12%

**Alternative B:**
*   Initial Cost: \$150,000
*   Annual Savings: \$40,000 per year for 10 years
*   Interest Rate: 12%

**PW Calculation:**

*   **Alternative A:**
    $NPW_A = \$30,000 \times \frac{(1+0.12)^{10} - 1}{0.12(1+0.12)^{10}} - \$100,000$
    $NPW_A = \$30,000 \times 5.6502 - \$100,000 = \$169,506 - \$100,000 = \$69,506$

*   **Alternative B:**
    $NPW_B = \$40,000 \times \frac{(1+0.12)^{10} - 1}{0.12(1+0.12)^{10}} - \$150,000$
    $NPW_B = \$40,000 \times 5.6502 - \$150,000 = \$226,008 - \$150,000 = \$76,008$

**Decision:** Alternative B has a higher NPW (\$76,008 vs. \$69,506), so it is the preferred choice.

**Important Point:** When alternatives have different lifespans, using the **least common multiple (LCM) of their lives** for the analysis period or using **equivalent annual cost (EAC)** is recommended to ensure a fair comparison.

---

### 4. Future Worth (FW) Comparison

**Definition:** The Future Worth (FW) of an alternative is the equivalent value of all its cash flows expressed at a future point in time, typically at the end of the project's life.

**How it Works:**
*   **Costs:** Future costs are compounded to the future time. Present costs are compounded to the future time.
*   **Benefits:** Future benefits are compounded to the future time.
*   **Net Future Worth (NFW):** The difference between the future worth of benefits and the future worth of costs.

**Formula:**

$$
FW = \sum_{t=0}^{n} A_t (1+i)^{n-t}
$$

Where:
*   $FW$ = Future Worth
*   $A_t$ = Cash flow at time $t$
*   $i$ = Interest rate (per period)
*   $n$ = Number of periods (the future point in time)
*   $(1+i)^{n-t}$ = Compounding factor

**Relationship to PW:** The Future Worth (FW) of an alternative is simply its Present Worth (PW) compounded to the future point in time.

$$
FW = PW \times (1+i)^n
$$

**Decision Rule:**
*   When comparing mutually exclusive alternatives, select the alternative with the **highest (least negative) Net Future Worth (NFW)**.
*   If the NFW is positive, the project is economically viable. If it's negative, the project should be rejected.

**Example: FW Calculation (using Alternative B from Example 2)**

*   Alternative B: Initial Cost: \$150,000, Annual Savings: \$40,000 per year for 10 years, Interest Rate: 12%
*   We previously calculated $NPW_B = \$76,008$.

**FW Calculation:**
$NFW_B = NPW_B \times (1+i)^n$
$NFW_B = \$76,008 \times (1+0.12)^{10}$
$NFW_B = \$76,008 \times 3.1058 = \$236,143$

**Interpretation:** At the end of 10 years, Alternative B is worth \$236,143.

**Why use FW?**
*   Sometimes, it's easier to conceptualize the value of an investment at the end of its life.
*   It can be useful for projects where the final value or terminal salvage is a significant factor.

**Important Point:** PW and FW comparisons will always lead to the same decision for mutually exclusive alternatives because they are directly related by the compounding factor. The choice between PW and FW often comes down to preference or the specific context of the problem.

---

### 5. Annual Cost/Worth (AC/AW) Comparison

**Definition:** The Annual Cost (AC) or Annual Worth (AW) of an alternative is the equivalent uniform annual value of all its cash flows over its life. This method converts all costs and benefits into an equivalent annual amount.

**How it Works:**
*   **Capital Costs:** The initial cost is converted to an equivalent uniform annual cost using the capital recovery factor.
*   **Operating Costs/Benefits:** These are often already in annual terms.
*   **Salvage Value:** This is converted to an equivalent uniform annual cost (a negative cost, or a benefit) using the sinking fund factor.
*   **Net Annual Worth (NAW):** The difference between the annual worth of benefits and the annual cost of costs.

**Key Factors for Annualization:**

*   **Capital Recovery Factor (CRF) or A/P:** Converts a present sum to a uniform annual series.
    $$
    CRF = \frac{i(1+i)^n}{(1+i)^n - 1}
    $$
    So, Equivalent Annual Cost of Initial Investment = Initial Cost $\times CRF$

*   **Sinking Fund Factor (SFF) or A/F:** Converts a future sum to a uniform annual series.
    $$
    SFF = \frac{i}{(1+i)^n - 1}
    $$
    So, Equivalent Annual Benefit of Salvage Value = Salvage Value $\times SFF$

**Decision Rule:**
*   When comparing mutually exclusive alternatives, select the alternative with the **lowest total Annual Cost (AC)** or the **highest Net Annual Worth (NAW)**.
*   If the NAW is positive, the project is economically viable. If it's negative, the project should be rejected.

**Example: AC/AW Calculation (using Alternative A from Example 2)**

*   Alternative A: Initial Cost: \$100,000, Annual Savings: \$30,000 per year for 10 years, Interest Rate: 12%

**AW Calculation:**

*   **Annual Cost of Initial Investment:**
    $AC_{initial} = \$100,000 \times CRF = \$100,000 \times \frac{0.12(1+0.12)^{10}}{(1+0.12)^{10} - 1}$
    $AC_{initial} = \$100,000 \times 0.17698 = \$17,698$

*   **Annual Benefit (Savings):** \$30,000 (already annual)

*   **Net Annual Worth (NAW):**
    $NAW_A = Annual \ Savings - AC_{initial}$
    $NAW_A = \$30,000 - \$17,698 = \$12,302$

**Interpretation:** Alternative A has an equivalent annual benefit of \$12,302.

**Example: Comparing Alternatives with AC/AW**

Let's compare Alternative A and Alternative B using AC/AW.

*   **Alternative A:** $NAW_A = \$12,302$ (calculated above)

*   **Alternative B:**
    *   Initial Cost: \$150,000
    *   Annual Savings: \$40,000 per year for 10 years
    *   Interest Rate: 12%

    **AW Calculation for Alternative B:**
    *   **Annual Cost of Initial Investment:**
        $AC_{initial\_B} = \$150,000 \times CRF = \$150,000 \times 0.17698 = \$26,547$
    *   **Annual Benefit (Savings):** \$40,000
    *   **Net Annual Worth (NAW):**
        $NAW_B = \$40,000 - \$26,547 = \$13,453$

**Decision:** Alternative B has a higher NAW (\$13,453 vs. \$12,302), so it is the preferred choice. This matches the PW and FW comparisons.

**When is AC/AW preferred?**
*   When comparing alternatives with **different lifespans**. AC/AW allows for a direct comparison by converting all cash flows to an equivalent annual cost, making the comparison fair regardless of the project duration.
*   When the objective is to minimize the annual expenditure or maximize the annual return.
*   It's often used in public sector projects and for comparing maintenance and operating costs.

**Important Point:** When comparing alternatives with different lifespans using PW or FW, it's crucial to bring them to a common analysis period, often the LCM of their lives. AC/AW inherently handles this by annualizing cash flows over their respective lives.

---

### 6. Practice Questions

**Question 1:**
A construction project requires an initial investment of \$200,000. It is expected to generate annual savings of \$50,000 for 15 years. The salvage value at the end of year 15 is \$20,000. If the interest rate is 8%, calculate the Net Present Worth (NPW) of this project.

**Question 2:**
Company X is considering two mutually exclusive pieces of equipment.
*   **Equipment 1:** Initial cost \$50,000, annual maintenance \$5,000 for 8 years, salvage value \$5,000 at the end of year 8.
*   **Equipment 2:** Initial cost \$60,000, annual maintenance \$3,000 for 8 years, salvage value \$8,000 at the end of year 8.
Using a 10% interest rate, which equipment should be chosen based on the Present Worth (PW) comparison?

**Question 3:**
Using the data from Question 2, which equipment should be chosen based on the Annual Cost (AC) comparison?

**Question 4:**
A company is evaluating a new machine. The initial cost is \$80,000. It is expected to last for 5 years and has no salvage value. The annual operating costs are \$10,000. The company's required rate of return is 15%. Calculate the Future Worth (FW) of this investment at the end of its life.

---

### 7. Answers to Practice Questions

**Answer 1:**
*   PW of Initial Investment: -\$200,000
*   PW of Annual Savings (Annuity): \$50,000 $\times \frac{(1+0.08)^{15}-1}{0.08(1+0.08)^{15}} = \$50,000 \times 7.9038 = \$395,190$
*   PW of Salvage Value (Single Sum): \$20,000 $\times (1+0.08)^{-15} = \$20,000 \times 0.3152 = \$6,304$
*   NPW = -\$200,000 + \$395,190 + \$6,304 = \$201,494
    The project is economically viable.

**Answer 2:**
First, calculate the PW for each equipment. The interest rate is 10%.
*   **Equipment 1:**
    *   PW of Initial Cost: -\$50,000
    *   PW of Maintenance (Annuity): -\$5,000 $\times \frac{(1+0.10)^8-1}{0.10(1+0.10)^8} = -\$5,000 \times 5.3349 = -\$26,674.50$
    *   PW of Salvage Value (Single Sum): \$5,000 $\times (1+0.10)^{-8} = \$5,000 \times 0.4665 = \$2,332.50$
    *   $NPW_1 = -\$50,000 - \$26,674.50 + \$2,332.50 = -\$74,342$

*   **Equipment 2:**
    *   PW of Initial Cost: -\$60,000
    *   PW of Maintenance (Annuity): -\$3,000 $\times \frac{(1+0.10)^8-1}{0.10(1+0.10)^8} = -\$3,000 \times 5.3349 = -\$16,004.70$
    *   PW of Salvage Value (Single Sum): \$8,000 $\times (1+0.10)^{-8} = \$8,000 \times 0.4665 = \$3,732$
    *   $NPW_2 = -\$60,000 - \$16,004.70 + \$3,732 = -\$72,272.70$

**Decision:** Equipment 2 has a higher (less negative) NPW (-\$72,272.70 vs. -\$74,342), so Equipment 2 should be chosen.

**Answer 3:**
Calculate the Annual Cost (AC) for each equipment. The interest rate is 10% and the life is 8 years.
*   **CRF (10%, 8 years):** $\frac{0.10(1+0.10)^8}{(1+0.10)^8 - 1} = 0.17698$
*   **SFF (10%, 8 years):** $\frac{0.10}{(1+0.10)^8 - 1} = 0.07355$

*   **Equipment 1:**
    *   AC of Initial Cost: \$50,000 $\times 0.17698 = \$8,849$
    *   Annual Maintenance Cost: \$5,000
    *   Annual Benefit from Salvage: \$5,000 $\times 0.07355 = \$367.75$
    *   Total AC$_1$ = \$8,849 + \$5,000 - \$367.75 = \$13,481.25

*   **Equipment 2:**
    *   AC of Initial Cost: \$60,000 $\times 0.17698 = \$10,618.80$
    *   Annual Maintenance Cost: \$3,000
    *   Annual Benefit from Salvage: \$8,000 $\times 0.07355 = \$588.40$
    *   Total AC$_2$ = \$10,618.80 + \$3,000 - \$588.40 = \$13,030.40

**Decision:** Equipment 2 has a lower Total Annual Cost (\$13,030.40 vs. \$13,481.25), so Equipment 2 should be chosen. (This matches the PW result).

**Answer 4:**
*   PW of Initial Cost: -\$80,000
*   PW of Annual Operating Costs (Annuity): -\$10,000 $\times \frac{(1+0.15)^5-1}{0.15(1+0.15)^5} = -\$10,000 \times 3.3522 = -\$33,522$
*   NPW = -\$80,000 - \$33,522 = -\$113,522
*   FW = NPW $\times (1+i)^n = -\$113,522 \times (1+0.15)^5 = -\$113,522 \times 2.0114 = -\$228,293.67$
    The future worth of this investment at the end of its life is -\$228,293.67.

---

### 8. Important Points to Remember

*   **Equivalence is Key:** All cash flows must be brought to a common point in time for fair comparison.
*   **Time Value of Money:** A dollar today is worth more than a dollar tomorrow due to earning potential.
*   **Interest Rate (i):** Crucial for discounting and compounding. Ensure it's consistent for all alternatives.
*   **PW Comparison:** Focuses on the value at time 0. Select the alternative with the highest NPW.
*   **FW Comparison:** Focuses on the value at a future point. Select the alternative with the highest NFW. PW and FW yield the same decision.
*   **AC/AW Comparison:** Converts all cash flows to an equivalent uniform annual amount. Select the alternative with the lowest total AC or highest NAW.
*   **Different Lifespans:** AC/AW is generally the preferred method for comparing alternatives with different lifespans to ensure a fair comparison without needing an LCM analysis period.
*   **Mutually Exclusive Alternatives:** The decision rule applies to choosing only one option from a set of options where selecting one precludes selecting others.
*   **Sunk Costs:** Past costs that cannot be recovered should be ignored in economic evaluations.
*   **Incremental Analysis:** For comparing alternatives where one is a subset of another (e.g., adding an upgrade), incremental analysis (comparing the differences) is used.

This concludes the notes on evaluating alternatives by equivalence. Understanding these concepts is fundamental to making sound economic decisions in construction and engineering projects.
