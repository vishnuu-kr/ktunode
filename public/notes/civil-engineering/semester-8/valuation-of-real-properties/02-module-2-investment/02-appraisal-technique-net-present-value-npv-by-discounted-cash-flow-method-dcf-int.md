---
title: "Appraisal technique – Net present value (NPV) by discounted cash flow method (DCF), Internal rate of return (IRR)-Numerical Example"
subject: "VALUATION OF REAL PROPERTIES"
module: "Module 2: Investment"
branch: "Civil Engineering"
semester: 8
topicId: "689f15d056b5e963ba811894"
status: "completed"
scrapedAt: "2026-05-20T19:05:08.430Z"
---
# Valuation of Real Properties - Module 2: Investment

## Topic: Appraisal Techniques - Net Present Value (NPV) & Internal Rate of Return (IRR)

This module focuses on evaluating investment opportunities in real properties using discounted cash flow (DCF) methods. We will explore two key appraisal techniques: Net Present Value (NPV) and Internal Rate of Return (IRR).

---

### Learning Outcomes:

Upon completion of this topic, you will be able to:

*   **Understand the principles of discounted cash flow (DCF) analysis in real estate investment.**
*   **Calculate the Net Present Value (NPV) of a real estate investment.**
*   **Interpret the NPV decision rule for investment appraisal.**
*   **Calculate the Internal Rate of Return (IRR) of a real estate investment.**
*   **Interpret the IRR decision rule for investment appraisal.**
*   **Compare and contrast NPV and IRR as investment appraisal techniques.**
*   **Apply NPV and IRR calculations to real-world real estate investment scenarios through numerical examples.**

---

### Key Concepts and Definitions:

*   **Discounted Cash Flow (DCF) Analysis:** A valuation method that estimates the value of an investment based on its expected future cash flows. It acknowledges the time value of money by discounting future cash flows back to their present value.
*   **Time Value of Money (TVM):** The concept that money available at the present time is worth more than the same amount in the future due to its potential earning capacity.
*   **Cash Flow:** The movement of money into and out of an investment. In real estate, this typically includes initial investment, rental income, operating expenses, and the proceeds from sale.
*   **Discount Rate (or Required Rate of Return):** The rate used to discount future cash flows to their present value. It represents the minimum acceptable rate of return an investor expects for taking on the risk of the investment. This is often influenced by market interest rates, risk premiums, and opportunity costs.
*   **Net Present Value (NPV):** The difference between the present value of cash inflows and the present value of cash outflows over a period of time. It is a measure of the profitability of a projected investment or project.
*   **Internal Rate of Return (IRR):** The discount rate that makes the NPV of all cash flows from a particular project equal to zero. It represents the effective rate of return an investment is expected to yield.
*   **Capital Budgeting:** The process of evaluating and selecting long-term investments. NPV and IRR are key capital budgeting techniques.

---

### 1. Appraisal Technique – Net Present Value (NPV) by Discounted Cash Flow Method (DCF)

**Introduction:**
NPV is a powerful tool for evaluating the profitability of real estate investments. It considers the timing and magnitude of all expected cash flows and discounts them back to their present value using an appropriate discount rate.

**Formula:**

$NPV = \sum_{t=0}^{n} \frac{CF_t}{(1 + r)^t}$

Where:
*   $CF_t$ = Net cash flow at time t (Cash inflow - Cash outflow)
*   $r$ = Discount rate (required rate of return)
*   $t$ = Time period (e.g., year 0, year 1, year 2, etc.)
*   $n$ = Total number of periods

**Steps to Calculate NPV:**

1.  **Identify all relevant cash flows:** This includes the initial investment (outflow at t=0), annual net operating income (inflows for operating periods), and the terminal value (inflow at the end of the holding period).
2.  **Determine the discount rate:** This is the investor's required rate of return, reflecting the riskiness of the investment.
3.  **Calculate the present value (PV) of each cash flow:** Apply the discount rate to each future cash flow.
    *   $PV = \frac{CF_t}{(1 + r)^t}$
4.  **Sum the present values of all cash inflows.**
5.  **Sum the present values of all cash outflows.** (The initial investment is usually the only outflow at t=0 and its PV is its initial value).
6.  **Calculate NPV:** Subtract the total present value of outflows from the total present value of inflows.

**NPV Decision Rule:**

*   **If NPV > 0:** The investment is expected to generate returns above the required rate of return. It is a financially attractive investment and should be accepted.
*   **If NPV < 0:** The investment is expected to generate returns below the required rate of return. It is not financially attractive and should be rejected.
*   **If NPV = 0:** The investment is expected to generate returns exactly equal to the required rate of return. The decision may depend on other factors.

**Important Points for NPV:**

*   **Considers all cash flows:** Captures the entire expected cash flow stream of the investment.
*   **Accounts for time value of money:** Correctly values money received at different points in time.
*   **Provides an absolute measure of value creation:** Directly tells you how much wealth the investment is expected to create in today's dollars.
*   **Assumes reinvestment of cash flows at the discount rate:** This is a key advantage over IRR.

---

### 2. Appraisal Technique – Internal Rate of Return (IRR)

**Introduction:**
IRR is another popular method for evaluating real estate investments. It calculates the discount rate at which the NPV of an investment becomes zero. In essence, it's the effective rate of return that the investment is projected to yield.

**Concept:**
IRR is the discount rate ($r$) that satisfies the following equation:

$\sum_{t=0}^{n} \frac{CF_t}{(1 + IRR)^t} = 0$

**IRR Decision Rule:**

*   **If IRR > Discount Rate (Required Rate of Return):** The investment is expected to generate returns higher than what the investor requires. It is a financially attractive investment and should be accepted.
*   **If IRR < Discount Rate (Required Rate of Return):** The investment is expected to generate returns lower than what the investor requires. It is not financially attractive and should be rejected.
*   **If IRR = Discount Rate (Required Rate of Return):** The investment is expected to generate returns exactly equal to the required rate of return.

**Methods to Calculate IRR:**

Calculating IRR typically involves trial and error or using financial calculators/spreadsheet software. The process involves finding the discount rate that makes the NPV equal to zero.

**Steps for Trial-and-Error Calculation (Conceptual):**

1.  **Estimate an initial discount rate.**
2.  **Calculate the NPV using this rate.**
3.  **If NPV is positive, try a higher discount rate.**
4.  **If NPV is negative, try a lower discount rate.**
5.  **Continue adjusting the discount rate until the NPV is close to zero.** The rate that yields an NPV of zero is the IRR.

**Important Points for IRR:**

*   **Represents a percentage return:** Easily understood by investors.
*   **Does not require an explicit discount rate for calculation:** Although one is needed for the decision rule.
*   **Assumes reinvestment of cash flows at the IRR:** This can be an unrealistic assumption, especially if the IRR is very high.
*   **Can be problematic with unconventional cash flows:** May yield multiple IRRs or no IRR for projects with alternating positive and negative cash flows.

---

### Numerical Example:

Let's consider a small commercial property investment.

**Investment Scenario:**

An investor is considering purchasing a small office building for **$500,000**.
The expected annual net cash flows (rental income minus operating expenses) are:
*   Year 1: $60,000
*   Year 2: $65,000
*   Year 3: $70,000
*   Year 4: $75,000
*   Year 5: $80,000

At the end of Year 5, the investor expects to sell the property for **$600,000** (this is a cash inflow in Year 5).
The investor's required rate of return (discount rate) is **10%**.

---

#### **Calculating NPV:**

We need to calculate the present value of each cash flow and then sum them up.

| Year (t) | Cash Flow ($CF_t$) | Discount Factor ($1/(1+r)^t$) | Present Value ($PV_t = CF_t \times Discount Factor$) |
| :------- | :---------------- | :----------------------------- | :-------------------------------------------------- |
| 0        | -$500,000         | $1/(1.10)^0 = 1.0000$          | -$500,000.00                                        |
| 1        | $60,000          | $1/(1.10)^1 = 0.9091$          | $54,546.00$                                         |
| 2        | $65,000          | $1/(1.10)^2 = 0.8264$          | $53,716.00$                                         |
| 3        | $70,000          | $1/(1.10)^3 = 0.7513$          | $52,591.00$                                         |
| 4        | $75,000          | $1/(1.10)^4 = 0.6830$          | $51,225.00$                                         |
| 5        | $600,000 + $80,000 = $680,000$ | $1/(1.10)^5 = 0.6209$          | $422,012.00$                                        |
|          |                   | **Total PV of Inflows**        | **$634,090.00$**                                     |
|          |                   | **Total PV of Outflows**       | **$500,000.00$**                                     |
|          |                   | **NPV**                        | **$134,090.00$**                                     |

**Calculation Breakdown:**

*   **Year 0:** Initial investment is an outflow of -$500,000. Its PV is -$500,000.
*   **Year 1:** PV of $60,000 = $60,000 / (1.10)^1 = $54,546.00$
*   **Year 2:** PV of $65,000 = $65,000 / (1.10)^2 = $53,716.00$
*   **Year 3:** PV of $70,000 = $70,000 / (1.10)^3 = $52,591.00$
*   **Year 4:** PV of $75,000 = $75,000 / (1.10)^4 = $51,225.00$
*   **Year 5:** The cash flow includes both the annual net income and the sale proceeds.
    *   Total cash flow in Year 5 = $80,000 (income) + $600,000 (sale) = $680,000
    *   PV of $680,000 = $680,000 / (1.10)^5 = $422,012.00$

**Total Present Value of Inflows:** $54,546 + $53,716 + $52,591 + $51,225 + $422,012 = $634,090$
**Total Present Value of Outflows:** $500,000$
**NPV = Total PV of Inflows - Total PV of Outflows**
**NPV = $634,090 - $500,000 = $134,090**

**NPV Decision:** Since the NPV is **$134,090**, which is greater than zero, the investment is considered financially attractive.

---

#### **Calculating IRR:**

We need to find the discount rate ($IRR$) that makes the NPV equal to zero. This is where trial-and-error or software comes in.

Let's use trial and error to illustrate the concept. We already know that at 10%, the NPV is positive ($134,090$). So, the IRR must be higher than 10%. Let's try 15%.

**Trial 1: Discount Rate = 15% (0.15)**

| Year (t) | Cash Flow ($CF_t$) | Discount Factor ($1/(1.15)^t$) | Present Value ($PV_t = CF_t \times Discount Factor$) |
| :------- | :---------------- | :----------------------------- | :-------------------------------------------------- |
| 0        | -$500,000         | $1/(1.15)^0 = 1.0000$          | -$500,000.00                                        |
| 1        | $60,000          | $1/(1.15)^1 = 0.8696$          | $52,176.00$                                         |
| 2        | $65,000          | $1/(1.15)^2 = 0.7561$          | $49,146.50$                                         |
| 3        | $70,000          | $1/(1.15)^3 = 0.6575$          | $46,025.00$                                         |
| 4        | $75,000          | $1/(1.15)^4 = 0.5718$          | $42,885.00$                                         |
| 5        | $680,000         | $1/(1.15)^5 = 0.4972$          | $338,096.00$                                        |
|          |                   | **Total PV of Inflows**        | **$528,328.50$**                                     |
|          |                   | **Total PV of Outflows**       | **$500,000.00$**                                     |
|          |                   | **NPV @ 15%**                  | **$28,328.50$**                                      |

The NPV at 15% is still positive ($28,328.50$), but much lower than at 10%. This means the IRR is higher than 15%. Let's try 17%.

**Trial 2: Discount Rate = 17% (0.17)**

| Year (t) | Cash Flow ($CF_t$) | Discount Factor ($1/(1.17)^t$) | Present Value ($PV_t = CF_t \times Discount Factor$) |
| :------- | :---------------- | :----------------------------- | :-------------------------------------------------- |
| 0        | -$500,000         | $1/(1.17)^0 = 1.0000$          | -$500,000.00                                        |
| 1        | $60,000          | $1/(1.17)^1 = 0.8547$          | $51,282.00$                                         |
| 2        | $65,000          | $1/(1.17)^2 = 0.7305$          | $47,482.50$                                         |
| 3        | $70,000          | $1/(1.17)^3 = 0.6244$          | $43,708.00$                                         |
| 4        | $75,000          | $1/(1.17)^4 = 0.5337$          | $40,027.50$                                         |
| 5        | $680,000         | $1/(1.17)^5 = 0.4561$          | $309,988.00$                                        |
|          |                   | **Total PV of Inflows**        | **$492,488.00$**                                     |
|          |                   | **Total PV of Outflows**       | **$500,000.00$**                                     |
|          |                   | **NPV @ 17%**                  | **-$7,512.00$**                                      |

The NPV at 17% is negative (-$7,512.00$). This means the IRR is between 15% and 17%.

**Using Interpolation (for a more precise estimate without software):**

We can interpolate to estimate the IRR.
*   $NPV_{15\%} = 28,328.50$
*   $NPV_{17\%} = -7,512.00$

$IRR \approx \text{Lower Rate} + \frac{NPV_{Lower Rate}}{NPV_{Lower Rate} - NPV_{Higher Rate}} \times (\text{Higher Rate} - \text{Lower Rate})$
$IRR \approx 0.15 + \frac{28,328.50}{28,328.50 - (-7,512.00)} \times (0.17 - 0.15)$
$IRR \approx 0.15 + \frac{28,328.50}{35,840.50} \times 0.02$
$IRR \approx 0.15 + 0.7904 \times 0.02$
$IRR \approx 0.15 + 0.0158$
$IRR \approx 0.1658$ or **16.58%**

**IRR Decision:** The calculated IRR is approximately **16.58%**. Since this is greater than the investor's required rate of return of 10%, the investment is considered financially attractive.

---

### Comparison of NPV and IRR:

| Feature              | Net Present Value (NPV)                                 | Internal Rate of Return (IRR)                               |
| :------------------- | :------------------------------------------------------ | :---------------------------------------------------------- |
| **Decision Criteria** | Accept if NPV > 0                                       | Accept if IRR > Required Rate of Return                     |
| **Output**           | Absolute dollar amount of value creation                | Percentage rate of return                                   |
| **Reinvestment Assumption** | Assumes reinvestment at the discount rate (realistic) | Assumes reinvestment at the IRR (can be unrealistic)        |
| **Scale of Investment** | Better for comparing mutually exclusive projects of different scales | Can be misleading when comparing projects of different scales |
| **Multiple Rates**   | No issue with multiple rates                            | Can have multiple IRRs or no IRR for unconventional cash flows |
| **Ease of Understanding** | Mathematically sound but less intuitive than IRR      | Easy to understand (a percentage return)                    |
| **Preferred Method** | Generally preferred by academics and for capital budgeting decisions due to its realistic reinvestment assumption. | Popular with practitioners due to its intuitive nature.     |

---

### Practice Questions/Exercises:

**Question 1:**
An investor is considering a property with the following cash flows:
*   Initial Investment (Year 0): -$300,000
*   Net Cash Flow Year 1: $50,000
*   Net Cash Flow Year 2: $60,000
*   Net Cash Flow Year 3: $70,000
*   Sale Proceeds Year 3: $280,000

The investor's required rate of return is 12%.
a) Calculate the NPV of this investment.
b) Based on the NPV, would you recommend accepting this investment?

**Question 2:**
Using the same cash flows as Question 1, calculate the IRR of the investment. (You can use a financial calculator or spreadsheet software for this, or perform a trial-and-error approximation).
a) What is the IRR of the investment?
b) Based on the IRR, would you recommend accepting this investment if the required rate of return is 12%?

**Question 3:**
Explain two advantages of using NPV over IRR for evaluating real estate investment opportunities.

---

### Answers to Practice Questions:

**Answer 1:**

**a) NPV Calculation:**

| Year (t) | Cash Flow ($CF_t$) | Discount Factor ($1/(1.12)^t$) | Present Value ($PV_t = CF_t \times Discount Factor$) |
| :------- | :---------------- | :----------------------------- | :-------------------------------------------------- |
| 0        | -$300,000         | $1/(1.12)^0 = 1.0000$          | -$300,000.00                                        |
| 1        | $50,000          | $1/(1.12)^1 = 0.8929$          | $44,645.00$                                         |
| 2        | $60,000          | $1/(1.12)^2 = 0.7972$          | $47,832.00$                                         |
| 3        | $70,000 + $280,000 = $350,000$ | $1/(1.12)^3 = 0.7118$          | $249,130.00$                                        |
|          |                   | **Total PV of Inflows**        | **$341,607.00$**                                     |
|          |                   | **Total PV of Outflows**       | **$300,000.00$**                                     |
|          |                   | **NPV**                        | **$41,607.00$**                                      |

**b) NPV Recommendation:**
Since the NPV ($41,607.00) is greater than zero, the investment is expected to generate returns above the required rate of return. Therefore, you would **recommend accepting** this investment.

---

**Answer 2:**

**a) IRR Calculation:**
This requires iterative calculation.
*   At 12%, NPV = $41,607.00$
*   Let's try 15%:
    *   PV Year 1: $50,000 / 1.15^1 = $43,478.26$
    *   PV Year 2: $60,000 / 1.15^2 = $45,434.94$
    *   PV Year 3: $350,000 / 1.15^3 = $230,491.34$
    *   Total PV Inflows @ 15% = $319,404.54$
    *   NPV @ 15% = $319,404.54 - $300,000 = $19,404.54$
*   Let's try 18%:
    *   PV Year 1: $50,000 / 1.18^1 = $42,372.88$
    *   PV Year 2: $60,000 / 1.18^2 = $42,915.25$
    *   PV Year 3: $350,000 / 1.18^3 = $203,433.10$
    *   Total PV Inflows @ 18% = $288,721.23$
    *   NPV @ 18% = $288,721.23 - $300,000 = -$11,278.77$

Using interpolation or financial software, the IRR is approximately **16.5%**.

**b) IRR Recommendation:**
The IRR (16.5%) is greater than the required rate of return (12%). Therefore, you would **recommend accepting** this investment.

---

**Answer 3:**

Two advantages of using NPV over IRR:

1.  **Realistic Reinvestment Assumption:** NPV assumes that any positive cash flows generated by the project will be reinvested at the discount rate (which represents the investor's required rate of return or opportunity cost of capital). This is generally a more realistic assumption than IRR's assumption that cash flows are reinvested at the IRR itself, especially if the IRR is significantly higher than the discount rate.
2.  **Direct Measure of Value Creation:** NPV provides a direct measure of the absolute increase in wealth (in dollar terms) that the investment is expected to generate for the investor. This makes it easier to understand the overall financial impact of the investment, especially when comparing projects of different scales. IRR, being a percentage, doesn't directly indicate the scale of wealth creation.

---

### Important Points to Remember:

*   **Accuracy of Cash Flow Forecasts is Crucial:** Both NPV and IRR are only as good as the cash flow projections. Realistic and well-researched forecasts are essential.
*   **Discount Rate Selection:** Choosing the appropriate discount rate is critical for NPV analysis and for making the IRR decision. It should reflect the perceived risk of the investment and the investor's opportunity cost.
*   **Understand the Reinvestment Assumption:** Be aware of the different reinvestment assumptions made by NPV and IRR and their implications.
*   **IRR Can Be Problematic:** Be cautious when using IRR for projects with non-conventional cash flows (e.g., multiple sign changes). NPV is generally more robust in such situations.
*   **NPV is Generally Preferred:** For most capital budgeting decisions, NPV is considered the superior technique because it directly measures value creation and makes a more realistic reinvestment assumption.
*   **Use Both:** While NPV is often preferred, IRR can provide a useful perspective on the percentage return, making it easier to communicate to stakeholders. Many investors use both methods to cross-check their decisions.
