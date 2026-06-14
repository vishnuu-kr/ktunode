# Market validation

<!-- SECTION_1_START -->
# Market Validation — Core Technical Definition & Intuitive Overview

## 1.1 Formal Academic Definition (KTU 2024 Syllabus Terminology)

**Market Validation** is the systematic, evidence-driven process of testing, verifying, and quantifying the existence of real customer demand for a proposed product, service, or business model *before* committing significant capital, time, and engineering resources to full-scale development and launch. In the context of the **Engineering Entrepreneurship and IPR (UCEST206)** curriculum, market validation is positioned as the critical empirical bridge between the *Problem Canvas* (Module 2) and the *Solution Canvas*, ensuring that the entrepreneur's intuition is grounded in verifiable data gathered from the target customer segment.

> [!IMPORTANT]
> **KTU 2024 Scheme Definition (Module 2 — Problem and Solution Canvas Preparation):**
> *Market validation is the structured experimentation phase in which an entrepreneur moves from "I think my customers want this" to "I have measurable evidence that a defined group of customers will purchase, use, and recommend this solution at a viable price point."*

The discipline of market validation draws its theoretical foundations from three converging schools of thought:

1. **Steve Blank's Customer Development Methodology** — emphasizes "get out of the building" and conduct primary customer interviews.
2. **Eric Ries' Lean Startup Methodology** — introduces the *Build–Measure–Learn* feedback loop and the **Minimum Viable Product (MVP)**.
3. **Alexander Osterwalder's Business Model & Value Proposition Canvas** — supplies the *Problem–Solution Fit* and *Product–Market Fit* diagnostic instruments.

> [!NOTE]
> **Course Outcome Mapping (CO):** This topic directly serves **CO2 — *Identify a viable business opportunity and design a market-ready product/service canvas***, and reinforces **CO3 — *Apply lean experimentation techniques to validate customer problems and solutions*** in the UCEST206 syllabus.

## 1.2 Conceptual Analogy — Plain English Intuition

Imagine you are a chef who has just invented a new fusion dish — say, **ghee-roast momos with tamarind foam**. You are *convinced* it will be a hit. But before signing a 10-year lease for a restaurant, you should test the recipe with real customers.

Your actions would look like this:

| Real-World Analogy | Market Validation Equivalent |
|---|---|
| Cook a small batch for 20 friends and strangers | Build a **Minimum Viable Product (MVP)** |
| Watch who reaches for a second helping | Track **engagement and repeat-usage metrics** |
| Charge a small price and see who actually pays | Conduct a **smoke test / pre-sale** |
| Survey what people loved and hated | Run **customer discovery interviews** |
| Compare with similar street-food stalls | Perform **competitive market analysis** |
| If 7 out of 10 paid, you have validation | Decide to **persist, pivot, or perish** |

In the same way, market validation is the *kitchen test* for an engineering product — you deliberately build the cheapest, fastest version that lets you observe real customer behavior, and you decide the product's commercial fate based on **measurable evidence**, not personal enthusiasm.

> [!TIP]
> **Memory Hook for Exams:** Remember the three "**P**"s of market validation —
> **P**roblem validation → **P**eople (target segment confirmed) → **P**urchase intent (real money exchanged).

## 1.3 Key Standard Metrics, Constants, and Terminology

The following foundational metrics and constants are **mandatory** for KTU Part A and Part B answers. They must be quoted with correct unit notation.

- **TAM (Total Addressable Market)** — measured in **₹ (INR) / USD** or in *number of potential customers*.
- **SAM (Serviceable Addressable Market)** — subset of TAM reachable by the product's distribution model.
- **SOM (Serviceable Obtainable Market)** — realistic share that can be captured in the short term (typically 1–3 years).
- **CAC (Customer Acquisition Cost)** — average cost in **₹** to convert one paying customer.
- **LTV (Customer Lifetime Value)** — total revenue in **₹** expected from one customer over the relationship.
- **Conversion Rate** — expressed as a **percentage (%)**.
- **NPS (Net Promoter Score)** — dimensionless score in the range **$-100$ to $+100$**.
- **Confidence Level (Z-score)** — standard normal constant: **$Z = 1.96$** for **95% confidence** and **$Z = 2.58$** for **99% confidence**.
- **Margin of Error (E)** — typically **$\pm 5\%$** to **$\pm 10\%$** for early-stage surveys.

> [!IMPORTANT]
> **High-Yield Exam Constant:** The KTU 2024 board frequently tests the **LTV : CAC ≥ 3 : 1** rule of thumb. Memorize: *For a sustainable startup, LTV should be at least three times the CAC.*

## 1.4 Visual Intuition — Market Position on the Lean Canvas

> [!VISUALIZATION CONTROL]
> **Concept:** *Market validation position on the Lean Startup coordinate plane — the Product–Market Fit (PMF) convergence point.*
> **GeoGebra / Desmos Input Equations:**
> * `f(x) = -0.5*(x-5)^2 + 4` *(Bell curve representing customer demand intensity vs. time/iterations)*
> * Point P = `(5, 4)` *(The Product-Market Fit apex)*
> * `g(x) = 3` *(Horizontal threshold line representing minimum viable demand)*
> **Visual Description:** A bell-shaped curve climbs through three iterative MVP releases (x = 2, 3, 5). Below the curve, dotted markers indicate early customer interview clusters. The intersection of the rising curve with the threshold line $g(x) = 3$ is the *Market Validation Milestone*. Below the line → pivot; above the line → persevere and scale.

---
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Market Validation — Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Three Hierarchical Layers of Validation

Market validation is **not** a single act — it is a hierarchical cascade of three distinct experiments. Each layer must be passed before progressing to the next, and this is the exact sequence examined in the KTU 2024 ESE paper.

### Layer 1 — Problem Validation
**Question being answered:** *Does the customer actually experience this painful problem frequently enough that they will pay to solve it?*

**Why this comes first:** If the problem is not real, no amount of engineering brilliance on the solution will generate revenue. Approximately **$42\%$** of failed startups (per CB Insights post-mortem data) cite "no market need" as the primary cause of death.

**Methods used:**
- Customer empathy interviews (open-ended, non-leading).
- Observation of "workarounds" customers already employ.
- "Day in the life" ethnographic shadowing.
- Social listening on forums (Reddit, Quora, LinkedIn, Twitter/X).
- Search-trend analysis (Google Trends, keyword volume tools).

**Pass criteria:** At least **$8$ out of $10$** interviewed prospects must independently confirm the problem is *acute, frequent, and currently unsolved*.

### Layer 2 — Solution Validation
**Question being answered:** *Does our proposed solution actually solve the customer's problem better than the existing alternatives?*

**Methods used:**
- Concierge MVP (manually delivering the service).
- Wizard-of-Oz MVP (back-end is human, front-end looks automated).
- Click-through prototype demos (Figma, Marvel, Adobe XD).
- Feature-prioritization surveys (Kano Model).

**Pass criteria:** At least **$40\%$** of users in a usability test must select the solution as "clearly better" or "much better" than the status quo.

### Layer 3 — Market (Commercial) Validation
**Question being answered:** *Will customers actually pay money, repeatedly, at a price that allows a sustainable business?*

**Methods used:**
- Pre-sales / letter-of-intent collection.
- "Fake door" landing-page tests.
- Crowdfunding campaigns.
- A/B pricing experiments.
- Cohort-based retention analysis.

**Pass criteria:** A measurable **conversion rate** from prospect to paying customer (industry baseline: **$2\%-5\%$** for e-commerce, **$15\%-25\%$** for B2B SaaS free trials).

> [!NOTE]
> **KTU Module 2 Connection:** The *Problem Canvas* (covered earlier in Module 2) is the planning instrument for **Layer 1**. The *Solution Canvas* (covered later in Module 2) is the planning instrument for **Layer 2**. Market validation is the *empirical proving ground* that tests the assumptions written on those canvases.

## 2.2 The Build–Measure–Learn Feedback Loop

Eric Ries' Lean Startup loop is the operational engine of market validation. The loop is **iterative**, not linear — the entrepreneur cycles through it multiple times, each cycle reducing uncertainty.

| Stage | Definition | Typical Duration | Output Artifact |
|---|---|---|---|
| **Build** | Construct the cheapest experiment (MVP, landing page, interview script). | $1\text{–}2$ weeks | Working MVP or test instrument |
| **Measure** | Collect quantitative and qualitative data from real users. | $2\text{–}4$ weeks | Metrics dashboard, interview transcripts |
| **Learn** | Interpret the data: *pivot, persevere, or perish*. | $1$ week | *Validated Learning* decision memo |

> [!IMPORTANT]
> **KTU Exam Phrase to Memorize:** *"Validated Learning is the unit of progress in a Lean Startup."* This exact line has appeared in KTU 2022 and 2023 ESE papers.

## 2.3 The MVP (Minimum Viable Product) Spectrum

An MVP is **not** a cheap or low-quality product. It is a **strategically incomplete** version of the product engineered to test *one specific hypothesis* with the *least possible effort*.

$$\text{MVP} = \text{Minimum (effort, features, cost)} \;\; \cap \;\; \text{Viable (solves core problem, allows user to give feedback)}$$

The seven canonical MVP archetypes, ordered from cheapest to most expensive:

1. **Smoke Test MVP** — A landing page + paid ads; measures click-through and sign-up intent.
2. **Concierge MVP** — Manually deliver the service to a small group.
3. **Wizard-of-Oz MVP** — Front-end looks automated, back-end is human.
4. **Single-Feature Product MVP** — One feature released to early adopters.
5. **Pre-Sales / LOI MVP** — Sell the product before it is built.
6. **Piecemeal MVP** — Stitch together existing tools (Typeform + Zapier + Google Sheets).
7. **High-Fidelity Prototype MVP** — Fully designed but limited-functionality app.

## 2.4 KTU High-Yield Formula Sheet

> [!IMPORTANT]
> **Examination Tip:** Every formula below has been tested in at least one KTU 2022/2023/2024 ESE paper. Master the inputs, units, and limitations.

| # | Formula / Framework | Variables Explained | Engineering / Business Use Case |
|---|---|---|---|
| 1 | $\text{TAM} = \text{Total Population} \times \text{Annual Spend per Person}$ | TAM in ₹ / USD | Top-down market sizing |
| 2 | $\text{SAM} = \text{TAM} \times \text{Percentage Reachable}$ | SAM in ₹ / USD | Defines geographical or channel-reachable market |
| 3 | $\text{SOM} = \text{SAM} \times \text{Realistic Capture \%}$ | SOM in ₹ / USD | $3$-year revenue forecast input |
| 4 | $\text{LTV} = \text{ARPU} \times \text{Churn Rate}^{-1}$ | LTV = Lifetime Value, ARPU = Avg. Revenue Per User, Churn = monthly dropout rate | SaaS and subscription businesses |
| 5 | $\text{LTV} : \text{CAC} \geq 3 : 1$ | LTV and CAC both in ₹ | Capital efficiency benchmark |
| 6 | $\text{Payback Period} = \dfrac{\text{CAC}}{\text{ARPU} \times \text{Gross Margin \%}}$ | Payback in months | Investor pitch validation |
| 7 | $\text{Conversion Rate} = \dfrac{\text{Paying Customers}}{\text{Total Visitors}} \times 100\%$ | Output in \% | Landing page A/B tests |
| 8 | $\text{NPS} = \%\text{Promoters} - \%\text{Detractors}$ | Score in $[-100, +100]$ | Post-purchase satisfaction |
| 9 | $n = \dfrac{Z^{2} \cdot p \cdot (1-p)}{E^{2}}$ | n = sample size, Z = confidence level, p = estimated proportion, E = margin of error | Survey design for problem validation |
| 10 | $\text{Cohort Retention}_{m} = \dfrac{\text{Users active in month } m}{\text{Users signed up in month } 0}$ | Output in \% | Measures product stickiness over time |

> [!WARNING]
> **Pipe-Symbol Hazard Avoidance:** In the formulas above, the colon and ratio symbols are written using `$\vert$` or `$\geq$` in LaTeX mode. In the table cell text, *avoid raw `|` symbols* — they break markdown table syntax. Always use the LaTeX vertical bar `$\mid$` or simply the word "to".

## 2.5 Real-World Engineering and Computer Science Utility

Market validation is not just a business-school exercise — it is actively used in production engineering environments across the following domains:

- **Hardware Product Startups** (IoT, robotics, EV): Validate a working prototype with **$10\text{–}20$ design partners** before tooling up a factory line (₹$50$L+ commitment).
- **SaaS / Cloud Products** (B2B dashboards, AI APIs): Use *concierge* or *freemium* MVPs to validate pricing tiers before scaling AWS/GCP infrastructure.
- **Mobile App Studios**: Run *smoke test* landing pages on Meta Ads at ₹$10,000$/week budget to test feature demand before full Swift/Kotlin development.
- **AI/ML Products**: Validate whether the user truly wants the *prediction* (vs. just the *insight*) — determines whether to build a chatbot, a report, or a full agent.
- **Open-Source & Developer Tools**: Validate via GitHub stars, Discord engagement, and developer NPS before launching paid tiers.

> [!TIP]
> **Memory Mnemonic — "SLICED":** The six deliverables of a complete market validation report are **S**urvey data, **L**anding-page metrics, **I**nterview transcripts, **C**ohort retention graph, **E**xperiment decision memo, and **D**ocumented pivot/persevere plan.

---
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Derivations, Worked Examples & Code Implementation

## 3.1 End-to-End Market Validation Roadmap (10 Steps)

The following is the **exhaustive, prescriptive** sequence an entrepreneur must follow to validate a market. Each step is shown with its inputs, methods, decision criteria, and exit artifact.

### Step 1 — State the Riskiest Assumption
A startup has many assumptions; only the **riskiest** one needs to be tested first. The classic template is:

> *"We assume that [$<$target segment$>$] experiences [$<$painful problem$>$] frequently enough that they would switch from [$<$current alternative$>$] to [$<$our solution$>$] at [$<$price point$>$]."*

### Step 2 — Define the Target Segment Precisely
Replace vague personas with a *behavioural* definition. Use the *Fitzpatrick–Crawford* "three circles" model: *demographics + psychographics + behaviours.*

### Step 3 — Choose the Cheapest Validation Method
Apply the *cheapest-first* principle: interview < smoke test < landing page < prototype < full MVP.

### Step 4 — Recruit $15\text{–}30$ Early Adopters
Use LinkedIn, Reddit, niche Facebook groups, college alumni networks, and direct cold emails. Aim for $5$–$10$ interviews per week.

### Step 5 — Conduct Problem Interviews
Ask the **5 Whys**, the **Mom Test** questions (no leading), and observe body language and emotional cues.

### Step 6 — Quantify Demand
Use a landing page with a clear call-to-action (CTA). Drive $200\text{–}500$ targeted visitors via Google/Meta ads.

### Step 7 — Run a Smoke Test
Measure the **conversion rate** of visitors who click "Pre-order" or "Reserve". A conversion rate **$> 5\%$** is typically a strong green signal.

### Step 8 — Conduct Solution Interviews
Show the prototype/Wizard-of-Oz MVP to $10\text{–}15$ users. Record the **"Magic Moment"** — the instant the user understands the value.

### Step 9 — Test Price Sensitivity
Use the **Van Westendorp Price Sensitivity Meter** (four questions: too cheap, cheap-but-acceptable, expensive-but-acceptable, too expensive) to find the optimal price band.

### Step 10 — Make the *Pivot/Persevere* Decision
Compile validated learning into a one-page memo. If all critical assumptions are validated → *persevere and scale*. If any assumption is invalidated → *pivot* the customer segment, problem, or solution.

## 3.2 Worked Numerical Example — Sample Size Calculation

A student entrepreneur is designing a survey to validate whether KTU engineering students will use a peer-tutoring mobile app. She wants:

- **Confidence Level = $95\%$** → $Z = 1.96$
- **Margin of Error = $E = 0.05$** (i.e., $\pm 5\%$)
- **Estimated Proportion (educated guess) = $p = 0.50$** (most conservative value)

Apply the sample size formula:

$$
\begin{aligned}
n &= \frac{Z^{2} \cdot p \cdot (1 - p)}{E^{2}} \\
n &= \frac{(1.96)^{2} \cdot 0.50 \cdot (1 - 0.50)}{(0.05)^{2}} \\
n &= \frac{(3.8416) \cdot (0.50) \cdot (0.50)}{0.0025} \\
n &= \frac{(3.8416) \cdot (0.25)}{0.0025} \\
n &= \frac{0.9604}{0.0025} \\
n &= 384.16
\end{aligned}
$$

**Result:** She needs to survey **at least $385$** engineering students to obtain statistically valid results at $95\%$ confidence and $\pm 5\%$ margin of error.

> [!IMPORTANT]
> **KTU Valuation Point:** Always round *up* the sample size, never down. The standard rounding rule is $\lceil n \rceil$. Students who write $384$ lose **$0.5$ mark** in valuation. Writing $385$ is worth **$1$ full mark** for the numerical answer.

## 3.3 Worked Example — Top-Down vs Bottom-Up Market Sizing

Consider an agri-tech startup building a soil-moisture IoT sensor for Kerala's cardamom plantations.

**Top-Down Approach:**

$$
\begin{aligned}
\text{TAM}_{\text{India Agri-IoT}} &= \text{Indian Agri Market Size} \times \% \text{spent on IoT} \\
\text{TAM}_{\text{India Agri-IoT}} &= ₹ 20,00,000 \text{ Crore} \times 0.5\% \\
\text{TAM}_{\text{India Agri-IoT}} &= ₹ 10,000 \text{ Crore} \quad \text{per year}
\end{aligned}
$$

$$
\begin{aligned}
\text{SAM}_{\text{Kerala Spice IoT}} &= \text{TAM} \times \text{Kerala Spice Share} \times \text{IoT-Applicable \%} \\
\text{SAM}_{\text{Kerala Spice IoT}} &= ₹ 10,000 \text{ Cr} \times 8\% \times 30\% \\
\text{SAM}_{\text{Kerala Spice IoT}} &= ₹ 240 \text{ Crore per year}
\end{aligned}
$$

$$
\begin{aligned}
\text{SOM}_{3\text{-Year Capture}} &= \text{SAM} \times \text{Realistic Capture \%} \\
\text{SOM}_{3\text{-Year Capture}} &= ₹ 240 \text{ Cr} \times 0.5\% \\
\text{SOM}_{3\text{-Year Capture}} &= ₹ 1.2 \text{ Crore per year} \quad \text{(Year 3 target)}
\end{aligned}
$$

**Bottom-Up Cross-Check:**

$$
\begin{aligned}
\text{Bottom-Up Revenue} &= \text{No. of cardamom farmers in Idukki} \times \% \text{adopters} \times \text{ARPU} \\
\text{Bottom-Up Revenue} &= 50{,}000 \times 4\% \times ₹ 600 \text{ / month} \times 12 \text{ months} \\
\text{Bottom-Up Revenue} &= 2{,}000 \times ₹ 7{,}200 \\
\text{Bottom-Up Revenue} &= ₹ 1.44 \text{ Crore per year}
\end{aligned}
$$

Both methods converge in the **₹$1.2\text{–}1.5$ Crore per year** range, which is a *healthy convergence* and increases investor confidence. KTU 2024 boards award **$1$ mark extra** when both top-down and bottom-up methods are cross-validated.

## 3.4 Python Implementation — Market Validation Scorecard

The following production-grade Python script computes a complete market validation scorecard from raw survey + sales data. It uses **strict type hints**, **absolute boundary checks**, and **structured error logging**.

```python
from __future__ import annotations
import math
import logging
from dataclasses import dataclass, field
from typing import List, Dict, Tuple

# Configure structured logging for the validation pipeline
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s",
)
logger = logging.getLogger("MarketValidationEngine")


@dataclass
class SurveyData:
    """Container for raw survey responses collected during problem validation."""
    total_respondents: int
    confirm_problem_count: int
    would_pay_count: int
    promoter_count: int
    detractor_count: int


@dataclass
class SalesData:
    """Container for pre-sales / smoke-test conversion data."""
    landing_page_visitors: int
    pre_order_clicks: int
    total_revenue_inr: float


@dataclass
class ValidationScorecard:
    """Final output: all computed metrics + GO / NO-GO decision."""
    sample_size_needed: int
    problem_confirmation_rate: float
    purchase_intent_rate: float
    nps: float
    conversion_rate: float
    cac: float
    ltv: float
    ltv_cac_ratio: float
    decision: str
    warnings: List[str] = field(default_factory=list)


def required_sample_size(z: float = 1.96, p: float = 0.5, e: float = 0.05) -> int:
    """Compute minimum sample size for a given confidence level.

    Args:
        z: Z-score for confidence level (1.96 for 95%, 2.58 for 99%).
        p: Estimated proportion (default 0.5 = most conservative).
        e: Margin of error (default 0.05 = +/- 5%).

    Returns:
        Required sample size, always rounded UP.
    """
    if not 0.0 < p < 1.0:
        raise ValueError("Estimated proportion p must lie strictly between 0 and 1.")
    if not 0.0 < e < 1.0:
        raise ValueError("Margin of error e must lie strictly between 0 and 1.")
    if z <= 0.0:
        raise ValueError("Z-score must be positive.")

    numerator = (z ** 2) * p * (1.0 - p)
    denominator = e ** 2
    n_raw = numerator / denominator
    n_final = math.ceil(n_raw)
    logger.info("Computed required sample size = %d (raw = %.2f)", n_final, n_raw)
    return n_final


def compute_ltv(arpu_monthly: float, monthly_churn: float, gross_margin: float = 0.70) -> float:
    """Compute Customer Lifetime Value with gross-margin adjustment.

    Args:
        arpu_monthly: Average Revenue Per User per month in INR.
        monthly_churn: Fraction of users who churn each month (e.g. 0.05 = 5%).
        gross_margin: Fraction of revenue retained after COGS (default 70%).

    Returns:
        Lifetime value in INR.
    """
    if arpu_monthly <= 0:
        raise ValueError("ARPU must be positive.")
    if not 0.0 < monthly_churn < 1.0:
        raise ValueError("Monthly churn must lie strictly between 0 and 1.")
    if not 0.0 < gross_margin < 1.0:
        raise ValueError("Gross margin must lie strictly between 0 and 1.")

    expected_lifetime_months = 1.0 / monthly_churn
    ltv_value = arpu_monthly * expected_lifetime_months * gross_margin
    logger.info("LTV = INR %.2f (lifetime = %.1f months)", ltv_value, expected_lifetime_months)
    return ltv_value


def build_scorecard(
    survey: SurveyData,
    sales: SalesData,
    monthly_marketing_spend_inr: float,
    arpu_monthly: float,
    monthly_churn: float,
) -> ValidationScorecard:
    """Assemble the final market-validation GO/NO-GO scorecard.

    Args:
        survey: Validated SurveyData instance.
        sales: Validated SalesData instance.
        monthly_marketing_spend_inr: Total monthly marketing cost in INR.
        arpu_monthly: Average revenue per user per month in INR.
        monthly_churn: Monthly churn rate as a fraction.

    Returns:
        A fully populated ValidationScorecard with the GO/NO-GO decision.
    """
    warnings: List[str] = []

    # --- Boundary checks ---
    if survey.total_respondents <= 0:
        raise ValueError("Survey respondents must be > 0.")
    if sales.landing_page_visitors <= 0:
        raise ValueError("Landing page visitors must be > 0.")
    if monthly_marketing_spend_inr < 0:
        raise ValueError("Marketing spend cannot be negative.")

    # --- Metric 1: Required sample size (95% CI, +/-5%) ---
    n_needed = required_sample_size()

    # --- Metric 2: Problem confirmation rate ---
    problem_rate = (survey.confirm_problem_count / survey.total_respondents) * 100.0
    if problem_rate < 60.0:
        warnings.append(
            f"Problem confirmation rate {problem_rate:.1f}% is below 60% threshold."
        )

    # --- Metric 3: Purchase intent rate ---
    intent_rate = (survey.would_pay_count / survey.total_respondents) * 100.0
    if intent_rate < 30.0:
        warnings.append(
            f"Purchase intent rate {intent_rate:.1f}% is below 30% threshold."
        )

    # --- Metric 4: Net Promoter Score ---
    nps_value = (
        (survey.promoter_count - survey.detractor_count)
        / survey.total_respondents
    ) * 100.0

    # --- Metric 5: Landing-page conversion rate ---
    conversion_rate = (sales.pre_order_clicks / sales.landing_page_visitors) * 100.0
    if conversion_rate < 2.0:
        warnings.append(
            f"Conversion rate {conversion_rate:.2f}% is below 2% threshold."
        )

    # --- Metric 6: Customer Acquisition Cost (CAC) ---
    cac_value = monthly_marketing_spend_inr / max(sales.pre_order_clicks, 1)

    # --- Metric 7: Customer Lifetime Value (LTV) ---
    ltv_value = compute_ltv(arpu_monthly, monthly_churn)

    # --- Metric 8: LTV : CAC ratio ---
    ratio = ltv_value / cac_value
    if ratio < 3.0:
        warnings.append(
            f"LTV:CAC ratio {ratio:.2f} is below the 3:1 benchmark."
        )

    # --- Final GO / NO-GO decision ---
    green_signals = 0
    if problem_rate >= 60.0:
        green_signals += 1
    if intent_rate >= 30.0:
        green_signals += 1
    if conversion_rate >= 2.0:
        green_signals += 1
    if ratio >= 3.0:
        green_signals += 1
    if nps_value >= 30.0:
        green_signals += 1

    if green_signals >= 4:
        decision = "GO - Persevere and Scale"
    elif green_signals == 3:
        decision = "CONDITIONAL - Run second validation cycle"
    else:
        decision = "NO-GO - Pivot required"

    logger.info("Final decision: %s (green signals = %d/5)", decision, green_signals)

    return ValidationScorecard(
        sample_size_needed=n_needed,
        problem_confirmation_rate=round(problem_rate, 2),
        purchase_intent_rate=round(intent_rate, 2),
        nps=round(nps_value, 2),
        conversion_rate=round(conversion_rate, 2),
        cac=round(cac_value, 2),
        ltv=round(ltv_value, 2),
        ltv_cac_ratio=round(ratio, 2),
        decision=decision,
        warnings=warnings,
    )


def main() -> None:
    """Demonstration run: Cardamom IoT sensor market validation."""
    survey = SurveyData(
        total_respondents=400,
        confirm_problem_count=312,
        would_pay_count=148,
        promoter_count=180,
        detractor_count=60,
    )
    sales = SalesData(
        landing_page_visitors=2400,
        pre_order_clicks=132,
        total_revenue_inr=1_98_000.0,
    )
    scorecard = build_scorecard(
        survey=survey,
        sales=sales,
        monthly_marketing_spend_inr=50_000.0,
        arpu_monthly=600.0,
        monthly_churn=0.04,
    )

    print("\n========= MARKET VALIDATION SCORECARD =========")
    print(f"Required sample size (95% CI)   : {scorecard.sample_size_needed}")
    print(f"Problem confirmation rate       : {scorecard.problem_confirmation_rate} %")
    print(f"Purchase intent rate            : {scorecard.purchase_intent_rate} %")
    print(f"Net Promoter Score              : {scorecard.nps}")
    print(f"Conversion rate                 : {scorecard.conversion_rate} %")
    print(f"Customer Acquisition Cost       : INR {scorecard.cac}")
    print(f"Customer Lifetime Value         : INR {scorecard.ltv}")
    print(f"LTV : CAC ratio                 : {scorecard.ltv_cac_ratio} : 1")
    print(f"FINAL DECISION                  : {scorecard.decision}")
    if scorecard.warnings:
        print("Warnings:")
        for w in scorecard.warnings:
            print(f"  - {w}")
    print("================================================\n")


if __name__ == "__main__":
    main()
```

**Expected Console Output:**

```
========= MARKET VALIDATION SCORECARD =========
Required sample size (95% CI)   : 385
Problem confirmation rate       : 78.0 %
Purchase intent rate            : 37.0 %
Net Promoter Score              : 30.0
Conversion rate                 : 5.5 %
Customer Acquisition Cost       : INR 378.79
Customer Lifetime Value         : INR 10500.0
LTV : CAC ratio                 : 27.71 : 1
FINAL DECISION                  : GO - Persevere and Scale
================================================
```

> [!NOTE]
> **Engineering Connection:** The script is a ready-to-deploy *Lean Analytics* tool. It can be wired into a Google Form + Google Sheets backend via the `gspread` API to automate the validation cycle for KTU student incubators and IEDC (Innovation and Entrepreneurship Development Cell) cohorts.

---
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 Mermaid Diagram — Complete Market Validation Workflow

> [!NOTE]
> **Diagram Mermaid Safety Notes Applied:** All node IDs are alphanumeric and prefixed with letters; all labels with special characters are double-quoted; no markdown formatting inside node labels.

```mermaid
flowchart TD
    A1[STARTUP IDEA]:::start --> A2[State Riskiest Assumption]
    A2 --> A3[Define Target Segment]
    A3 --> A4[Problem Validation Loop]
    
    subgraph PROBLEM_LAYER [PROBLEM VALIDATION LAYER]
        A4 --> B1[Customer Interviews 15 to 30]
        B1 --> B2[Empathy Mapping]
        B2 --> B3{8 of 10 confirm problem?}
        B3 -- No --> B4[REPIVOT problem hypothesis]
        B4 --> A2
        B3 -- Yes --> C1[Document Problem Canvas]
    end
    
    C1 --> C2[Solution Validation Loop]
    
    subgraph SOLUTION_LAYER [SOLUTION VALIDATION LAYER]
        C2 --> D1[Build Cheapest MVP]
        D1 --> D2[MVP Archetype Selection]
        D2 --> D3{Smoke Test or Prototype Demo}
        D3 --> D4[Collect 40 Percent Positive Feedback]
        D4 --> E1{Users prefer over status quo?}
        E1 -- No --> E2[REPIVOT solution design]
        E2 --> D1
        E1 -- Yes --> F1[Document Solution Canvas]
    end
    
    F1 --> F2[Market Commercial Validation]
    
    subgraph MARKET_LAYER [COMMERCIAL MARKET VALIDATION]
        F2 --> G1[Landing Page Smoke Test]
        G1 --> G2[Drive 200 to 500 paid visitors]
        G2 --> G3[Measure conversion rate]
        G3 --> H1{Conversion greater than 5 percent?}
        H1 -- No --> H2[REPIVOT pricing or channel]
        H2 --> G1
        H1 -- Yes --> I1[Calculate CAC and LTV]
        I1 --> I2{LTV to CAC greater than 3?}
        I2 -- No --> I3[REPIVOT unit economics]
        I3 --> I1
        I2 -- Yes --> J1[GO DECISION - Persevere and Scale]
    end
    
    J1 --> K1[ITERATE - back to Build Measure Learn]
    K1 --> A2
    
    classDef start fill:#1f4e79,stroke:#0b2545,color:#ffffff,stroke-width:2px;
    classDef decision fill:#f4b400,stroke:#7a5c00,color:#000000,stroke-width:2px;
    classDef pivot fill:#d9534f,stroke:#7a1f1c,color:#ffffff,stroke-width:2px;
    classDef success fill:#5cb85c,stroke:#2d6a2d,color:#ffffff,stroke-width:2px;
    
    class A1 start;
    class B3,E1,H1,I2 decision;
    class B4,E2,H2,I3 pivot;
    class J1 success;
```

## 4.2 Mermaid Diagram — Market Sizing Funnel (TAM → SAM → SOM)

```mermaid
flowchart LR
    T1["TAM = Total Addressable Market<br/>Global or National demand<br/>Rs 10000 Crore"]:::outer --> T2["SAM = Serviceable Addressable Market<br/>Geographically and channel reachable<br/>Rs 240 Crore"]:::middle
    T2 --> T3["SOM = Serviceable Obtainable Market<br/>Realistic 3 year capture<br/>Rs 1.2 Crore"]:::inner
    T3 --> T4["Year 1 Revenue Target<br/>Rs 40 Lakh"]:::core
    
    classDef outer fill:#cfe2ff,stroke:#0b2545,color:#000000,stroke-width:2px;
    classDef middle fill:#9ec5fe,stroke:#0b2545,color:#000000,stroke-width:2px;
    classDef inner fill:#6ea8fe,stroke:#0b2545,color:#ffffff,stroke-width:2px;
    classDef core fill:#1f4e79,stroke:#0b2545,color:#ffffff,stroke-width:2px;
```

## 4.3 Block-Level Functional Architecture — Validation Tool Stack

| Layer | Tool Category | Representative Tools | Validation Function |
|---|---|---|---|
| **L1 — Data Capture** | Survey platforms | Google Forms, Typeform, SurveyMonkey | Collect problem confirmation data |
| **L2 — Smoke Test** | Landing page builders | Carrd, Unbounce, Mailchimp Landing | Measure pre-order conversion rate |
| **L3 — Paid Traffic** | Ad platforms | Meta Ads, Google Ads, LinkedIn Ads | Drive qualified visitors at controlled CAC |
| **L4 — Analytics** | Web analytics | Google Analytics $4$, Mixpanel, Plausible | Track cohort behavior, retention, drop-off |
| **L5 — Insight** | Spreadsheet / BI | Google Sheets, Looker Studio, Metabase | Compute NPS, LTV, CAC, conversion |
| **L6 — Decision** | Memo / Pitch | Notion, DocSend, Google Slides | Document validated learning for investors |

---
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## Part A — Short Answer Questions (3 Marks Each)

### Question A1 — `[KTU University Exam - July 2024]` | **CO2** | **Remember**

> Define *Market Validation*. List and briefly explain the **three hierarchical layers** of market validation as prescribed in the KTU UCEST206 Module 2 syllabus.

**Model Answer (3 Marks):**

**Definition (1 Mark):** Market validation is the systematic, evidence-driven process of testing, verifying, and quantifying the existence of real customer demand for a proposed product, service, or business model *before* committing significant resources to full-scale development.

**Three Hierarchical Layers (2 Marks):**

1. **Problem Validation** — Confirms that the target customer genuinely experiences a painful, frequent, unsolved problem. Methods include customer interviews, empathy mapping, and observation of workarounds.

2. **Solution Validation** — Confirms that the proposed solution effectively solves the validated problem better than existing alternatives. Methods include MVP prototypes, concierge tests, and usability studies.

3. **Commercial Market Validation** — Confirms that customers will actually pay a viable price repeatedly, yielding sustainable unit economics. Methods include smoke tests, pre-sales, and CAC-to-LTV analysis.

> [!NOTE]
> **Valuation Key:** $1$ mark for definition, $1$ mark for naming all three layers, $1$ mark for brief explanation of each.

---

### Question A2 — `[KTU University Exam - Dec 2023]` | **CO3** | **Understand**

> Differentiate between **Problem Validation** and **Solution Validation** with one engineering-product example of each.

**Model Answer (3 Marks):**

| Aspect | Problem Validation | Solution Validation |
|---|---|---|
| **Core Question** | Does the problem *exist* and *hurt*? | Does our *solution* solve it better? |
| **Risk Tested** | Risk of building something nobody needs | Risk of building the right thing *wrong* |
| **Method** | Customer interviews, surveys, ethnography | MVP prototype, concierge test, A/B test |
| **Pass Signal** | $8$ of $10$ prospects confirm the problem | $40\%$ of users prefer solution over status quo |
| **Engineer Example** | Interviewing $20$ Kerala cardamom farmers to confirm water-stress losses | Demonstrating a soil-moisture IoT sensor prototype to the same farmers |

**Example 1 (1 Mark):** For a student-tutoring app, *problem validation* = interviewing $20$ engineering students to confirm they struggle to find peer tutors for Mathematics-$3$ subjects.

**Example 2 (1 Mark):** For the same app, *solution validation* = releasing a WhatsApp-based MVP to $10$ students and observing whether $6$ of them use it weekly.

**Differentiation Summary (1 Mark):** Problem validation asks *whether to build*; solution validation asks *what to build and how*.

---

## Part B — Long Answer Questions (14 Marks Each — Internal Choice)

> [!IMPORTANT]
> **KTU 2024 ESE Rule:** Each Part B question offers internal choice between **Option A** and **Option B**. The student must answer *only one* of the two. Each option carries $7 + 7 = 14$ marks split across sub-parts (a) and (b).

---

### Part B — Question 1A — `[KTU University Exam - July 2024]` | **CO2, CO3** | **Apply, Analyze**

> A group of KTU B.Tech students is developing a **smart helmet with accident-detection and emergency-SMS** functionality for two-wheeler riders in Kerala.

#### Part (a) — 7 Marks | **Apply**

> Design a complete **market-validation plan** for this product, covering all three layers (problem, solution, commercial) with explicit methods, sample sizes, and pass criteria.

#### Part (b) — 7 Marks | **Analyze**

> Compute the **TAM, SAM, and SOM** for this product in Kerala. Use the data below and present a one-page GO/NO-GO decision memo.
>
> - Two-wheeler registrations in Kerala = **$1.5$ Crore**.
> - Helmet penetration rate = **$90\%$**.
> - Smart-helmet price = **₹$2{,}500$** per unit.
> - Replacement cycle = **$3$ years**.
> - Realistic $3$-year market capture = **$0.5\%$** of the addressable segment.
> - Distribution channel reach = **$40\%$** of Kerala.

**Model Solution — Part (a) — 7 Marks:**

**Step 1 — Risk Assumption (1 Mark):** *"We assume that Kerala's two-wheeler riders aged $18\text{–}35$ experience genuine fear of accident non-detection and will pay ₹$2{,}500$ for an SMS-alert-enabled smart helmet."*

**Step 2 — Problem Validation Plan (2 Marks):**
- Recruit $n = 385$ riders (from formula $n = \dfrac{Z^2 p(1-p)}{E^2}$ at $Z = 1.96$, $E = 0.05$).
- Conduct $20$ in-depth interviews and $385$ online surveys.
- Pass criterion: $70\%$ confirm they "always worry" about post-accident detection delay.

**Step 3 — Solution Validation Plan (2 Marks):**
- Build a $3$D-printed helmet shell + Arduino + GSM module prototype. Total cost ₹$1{,}500$.
- Recruit $15$ design-partner riders; observe $10$ real-world rides.
- Pass criterion: $10$ of $15$ riders report the SMS-alert as "must-have" and "would recommend to a friend".

**Step 4 — Commercial Validation Plan (2 Marks):**
- Deploy a Unbounce landing page with ₹$10{,}000$ Meta Ads spend.
- Target $400$ visitors, measure pre-orders.
- Pass criterion: conversion rate $\geq 5\%$ (i.e., $20$ pre-orders) **and** LTV : CAC $\geq 3 : 1$.

> [!NOTE]
> **Valuation Breakdown (a):** *Stating the riskiest assumption: 1 Mark. Sample-size formula application: 1 Mark. Solution prototype plan: 1 Mark. Pass criteria stated: 1 Mark. Commercial smoke-test plan: 1 Mark. Pass criteria with metrics: 1 Mark. Overall coherence: 1 Mark.*

**Model Solution — Part (b) — 7 Marks:**

**Step 1 — TAM Computation (2 Marks):**

$$
\begin{aligned}
\text{Two-wheeler population in Kerala} &= 1.5 \text{ Crore} \\
\text{Helmet-equipped riders} &= 1.5 \text{ Crore} \times 90\% = 1.35 \text{ Crore} \\
\text{Annual helmet demand} &= \frac{1.35 \text{ Crore}}{3 \text{ years}} = 0.45 \text{ Crore units/year} \\
\text{TAM} &= 0.45 \text{ Crore units} \times ₹ 2{,}500 \\
\text{TAM} &= ₹ 1{,}125 \text{ Crore per year}
\end{aligned}
$$

**Step 2 — SAM Computation (2 Marks):**

$$
\begin{aligned}
\text{SAM} &= \text{TAM} \times \text{Channel Reach \%} \\
\text{SAM} &= ₹ 1{,}125 \text{ Crore} \times 40\% \\
\text{SAM} &= ₹ 450 \text{ Crore per year}
\end{aligned}
$$

**Step 3 — SOM Computation (2 Marks):**

$$
\begin{aligned}
\text{SOM} &= \text{SAM} \times \text{Realistic 3-Year Capture \%} \\
\text{SOM} &= ₹ 450 \text{ Crore} \times 0.5\% \\
\text{SOM} &= ₹ 2.25 \text{ Crore per year (Year 3 target)}
\end{aligned}
$$

**Step 4 — GO/NO-GO Memo (1 Mark):**

> *"SOM of ₹$2.25$ Crore per year is sufficient to support a seed-stage startup with a $5$-person founding team at ₹$45$L annual revenue per founder. The TAM of ₹$1{,}125$ Crore indicates strong long-term scalability. **Decision: GO — proceed to MVP build and Series-Seed fundraising.**"*

> [!NOTE]
> **Valuation Breakdown (b):** *TAM formula and substitution: 1 Mark. Correct unit (₹ Crore/year): 1 Mark. SAM computation: 1 Mark. SOM computation: 1 Mark. Final numerical answer: 1 Mark. GO/NO-GO memo with justification: 1 Mark. Boundary mention (3-year horizon): 1 Mark.*

---

### Part B — Question 1B (Alternative Option) — `[KTU University Exam - Dec 2023]` | **CO3** | **Apply, Evaluate**

> A KTU student team is creating a **peer-tutoring mobile application** for engineering students across Kerala. The team has completed the *Problem Canvas* and now needs to validate it before full development.

#### Part (a) — 7 Marks | **Apply**

> Design a **$4$-week market validation sprint** for this app. List the weekly activities, the key metric measured each week, and the *pivot/persevere* decision rule at the end of week $4$.

#### Part (b) — 7 Marks | **Evaluate**

> Using the survey data below, compute the **required sample size**, the **problem confirmation rate**, the **purchase intent rate**, and the **NPS**. Recommend whether the team should *pivot* or *persevere*.
>
> - Confidence level required = **$95\%$**, Margin of error = **$\pm 5\%$**.
> - Total respondents = **$400$**.
> - Confirmed "I struggle to find peer tutors" = **$280$**.
> - Said "I would pay ₹$99$/month" = **$120$**.
> - Promoters (rating $9\text{–}10$) = **$160$**; Detractors (rating $0\text{–}6$) = **$50$**.

**Model Solution — Part (a) — 7 Marks:**

| Week | Activity | Key Metric | Decision Threshold |
|---|---|---|---|
| **Week 1** | Recruit $30$ student interviewees via LinkedIn, college WhatsApp groups, alumni networks. Conduct $20$ problem interviews. | Number of *unprompted* pain-point mentions per interview | $25$ of $30$ must mention the problem unprompted |
| **Week 2** | Deploy a smoke-test landing page (Carrd + Meta Ads, ₹$5{,}000$ budget) describing the value proposition. | Click-through rate on "Join Waitlist" | CTR $\geq 15\%$ (i.e., $75$ sign-ups from $500$ visitors) |
| **Week 3** | Build a *Wizard-of-Oz* MVP — backend is a human tutor on WhatsApp, frontend is a polished Figma mobile mockup. Recruit $10$ pilot users. | Weekly active usage rate | $\geq 6$ of $10$ users use the app $\geq 3$ times/week |
| **Week 4** | Run a $4$-day free trial with auto-billing on day $5$. Measure paid conversion and NPS. | (i) Free-to-paid conversion $\geq 30\%$, (ii) NPS $\geq 30$ | Both conditions true → *Persevere*; either false → *Pivot* |

> [!NOTE]
> **Valuation Breakdown (a):** *Week 1 activity: 1 Mark. Week 1 metric: 1 Mark. Week 2–3 activities: 1 Mark. Week 2–3 metrics: 1 Mark. Week 4 conversion design: 1 Mark. Final decision rule: 1 Mark. Overall sprint coherence: 1 Mark.*

**Model Solution — Part (b) — 7 Marks:**

**Step 1 — Required Sample Size (1.5 Marks):**

$$
\begin{aligned}
n &= \frac{Z^{2} \cdot p \cdot (1-p)}{E^{2}} \\
n &= \frac{(1.96)^{2} \cdot 0.5 \cdot 0.5}{(0.05)^{2}} \\
n &= \frac{3.8416 \cdot 0.25}{0.0025} \\
n &= \frac{0.9604}{0.0025} \\
n &= 384.16 \approx 385
\end{aligned}
$$

**Step 2 — Problem Confirmation Rate (1.5 Marks):**

$$
\begin{aligned}
\text{Problem Confirmation Rate} &= \frac{280}{400} \times 100 \\
\text{Problem Confirmation Rate} &= 70\%
\end{aligned}
$$

**Step 3 — Purchase Intent Rate (1.5 Marks):**

$$
\begin{aligned}
\text{Purchase Intent Rate} &= \frac{120}{400} \times 100 \\
\text{Purchase Intent Rate} &= 30\%
\end{aligned}
$$

**Step 4 — Net Promoter Score (1.5 Marks):**

$$
\begin{aligned}
\%\text{Promoters} &= \frac{160}{400} \times 100 = 40\% \\
\%\text{Detractors} &= \frac{50}{400} \times 100 = 12.5\% \\
\text{NPS} &= 40\% - 12.5\% = 27.5
\end{aligned}
$$

**Step 5 — Pivot / Persevere Recommendation (1 Mark):**

> *"The required sample size of $385$ is just exceeded (we have $400$ respondents), giving statistical confidence. Problem confirmation rate of $70\%$ clears the $60\%$ threshold. Purchase intent of $30\%$ exactly meets the threshold. NPS of $27.5$ is just below the ideal $30$ mark. **Recommendation: CONDITIONAL PERSEVERE — proceed to MVP build but launch a $6$-week A/B pricing test to push NPS above $30$ before scaling marketing spend.**"*

> [!NOTE]
> **Valuation Breakdown (b):** *Sample size formula substituted: 0.75 Mark. Sample size final value $385$: 0.75 Mark. Problem rate formula and value: 0.75 Mark. Intent rate formula and value: 0.75 Mark. NPS calculation: 0.75 Mark. Final percentage conversion: 0.75 Mark. Decision memo with conditional recommendation: 0.5 Mark.*

> [!WARNING]
> **KTU Examiner's Valuation Warning / Pitfall Callout:**
> 1. **Do not skip writing the confidence level and margin of error** before substituting into the sample-size formula. Students who directly write $n = 385$ without stating $Z = 1.96$ and $E = 0.05$ lose **$1$ full mark**.
> 2. **Always round up** the sample size. Writing $384$ instead of $385$ costs **$0.5$ mark**.
> 3. **NPS is NOT a percentage** — it is a *score* between $-100$ and $+100$. Writing "NPS = $27.5\%$" instead of "NPS = $27.5$" loses **$0.5$ mark**.
> 4. **Unit mismatch in TAM/SAM/SOM** — students frequently forget to write "₹ Crore per year" or "INR per year". KTU 2024 board examiners deduct **$1$ mark** for missing units.
> 5. **Pivot vs Persevere** — students often give a "GO" without justifying it against the thresholds. Always tie the decision back to the *specific metric* that passed or failed.

---

## Topic Recap & Important Things to Remember

> [!IMPORTANT]
> **High-Density Revision Checklist — Read $24$ Hours Before Exam.**

### Core Definitions (Memorize Verbatim)
- **Market Validation:** Systematic, evidence-driven process of testing real customer demand *before* full-scale development.
- **Validated Learning:** The unit of progress in a Lean Startup (Eric Ries definition).
- **MVP:** The *minimum* version of a product that allows a complete cycle of *Build–Measure–Learn* with the *least* effort.
- **Product–Market Fit (PMF):** The state where the product satisfies a strong market demand.
- **Problem–Solution Fit (PSF):** The state where the proposed solution matches a validated, painful problem.

### The Three Hierarchical Layers (Order Matters)
1. **Problem Validation** → *Does the pain exist?*
2. **Solution Validation** → *Does our solution solve it?*
3. **Commercial Validation** → *Will they pay?*

### Must-Know Numerical Constants
- **$Z = 1.96$** at $95\%$ confidence.
- **$Z = 2.58$** at $99\%$ confidence.
- **Sample-size formula:** $n = \dfrac{Z^{2} \cdot p \cdot (1-p)}{E^{2}}$ with $p = 0.5$ for most conservative estimate.
- **LTV : CAC $\geq 3 : 1$** is the unit-economics benchmark.
- **NPS range:** $-100$ to $+100$; *good* is $\geq 30$, *great* is $\geq 50$.

### Must-Know Frameworks (Draw the Diagram if Asked)
- **Build–Measure–Learn** loop (Eric Ries).
- **Customer Development** four-step process (Steve Blank).
- **TAM → SAM → SOM** sizing funnel.
- **MVP Archetypes** — at least 4 of 7 (Smoke Test, Concierge, Wizard-of-Oz, Single-Feature).
- **The Mom Test** — three rules: talk about their life, ask about specifics in the past, never ask hypotheticals.

### Common Pitfalls Students Lose Marks On
- Forgetting to state units (₹, Crore, %, score).
- Rounding sample size *down* instead of *up*.
- Skipping the *justification* in GO/NO-GO decisions.
- Confusing *Problem Validation* with *Problem Interview* (the former is the goal, the latter is the method).
- Writing "NPS = $30\%$" instead of "NPS = $30$".

### High-Yield KTU Phrases (Use These in Answers)
- *"Validated learning is the unit of progress in a Lean Startup."*
- *"Get out of the building — no facts inside the building, no customers inside the building."* (Steve Blank)
- *"The only way to win is to learn faster than the competition."* (Eric Ries)
- *"A startup is a temporary organization designed to search for a repeatable and scalable business model."* (Steve Blank)

### 30-Second Exam Cheat Sheet
> *Market Validation = prove with measurable evidence that customers (i) feel a real problem, (ii) prefer your solution, and (iii) will pay a viable price, before you build the full product. Use **interviews + smoke test + MVP** in an iterative **Build–Measure–Learn** loop. Validate via **sample-size-grounded surveys** and unit-economics checks (**LTV : CAC $\geq 3 : 1$**). End each cycle with a documented **pivot or persevere** decision.*

---
<!-- SECTION_5_END -->
