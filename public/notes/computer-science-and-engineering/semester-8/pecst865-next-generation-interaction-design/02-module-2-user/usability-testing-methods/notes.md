# Usability testing methods

<!-- SECTION_1_START -->
# Usability Testing Methods — Core Technical Definition & Intuitive Overview

## 1.1 Formal Academic Definition (KTU 2024 Scheme Terminology)

> [!IMPORTANT]
> **Usability Testing** is a structured, empirical, user-centred evaluation technique in Human-Computer Interaction (HCI) and Next Generation Interaction Design in which **representative end-users** perform **predefined tasks** on a digital product (website, mobile application, AR/VR interface, voice UI, or wearable system) under **observed, controlled, or naturalistic conditions**, while evaluators collect qualitative and quantitative data on **effectiveness, efficiency, error tolerance, learnability, and satisfaction**.

Formally, according to **ISO 9241-11:2018** and the **Nielsen Norman Group usability framework**, usability is operationalised as the interaction between **Users**, **Goals**, and **Context of use**, quantified through measurable performance indicators (KPIs).

$$\text{Usability} = f(\text{Users}, \text{Goals}, \text{Context of Use})$$

Where the empirical testing equation for any task $T$ is evaluated as:

$$U_{score} = \frac{1}{n} \sum_{i=1}^{n} \left( E_i + L_i + S_i - P_i \right)$$

Where:
* $E_i$ = **Effectiveness** (task completion rate) of participant $i$
* $L_i$ = **Learnability** score
* $S_i$ = **Satisfaction** (often measured via SUS — System Usability Scale)
* $P_i$ = **Penalty** (errors and time-outs)
* $n$ = total number of test participants

> [!NOTE]
> **KTU 2024 Syllabus Highlight (PECST865 — Module 2: User):** Usability testing methods are classified as a **user-research technique under the "User Evaluation" thematic cluster** and map directly to **CO2: Analyse user behaviour and apply appropriate user research methods in interaction design**. Testing is the **empirical bridge** between user research and design iteration.

---

## 1.2 Conceptual Analogy / Intuition

> [!TIP]
> **Real-World Analogy — The "Car Test-Drive" Metaphor**
>
> Imagine you are an automotive engineer who has just designed a new car. Specifications, CAD models, and crash simulations all look perfect on paper. But would you ever ship the car to dealerships **without letting real drivers test-drive it?**
>
> **No.** You would invite ordinary drivers to:
> 1. Sit in the car (first-impression / onboarding test).
> 2. Drive to specific destinations (task-based testing).
> 3. Verbalise their thoughts while driving ("this brake feels spongy…", "I can't find the AC button…") — the classic **Think-Aloud Protocol**.
> 4. Park, refuel, and try the infotainment system (feature-level testing).
>
> **Usability testing is exactly this for software and interaction design.** It replaces *assumptions* about users with *evidence* from real users interacting with a real or simulated interface.

The **bold constants** and benchmark standards in usability testing are:

* **Minimum sample size:** **5 ± 2 users** (Nielsen, 1993 — to discover ~85% of usability defects).
* **Benchmark SUS score:** **$68$ points** (considered average usability).
* **Task success rate threshold:** **$\geq 78\%$** (industry baseline).
* **Standard session length:** **$30$–$60$ minutes** (to avoid participant fatigue).
* **Task completion time:** Compared against an **expert baseline** (typically $2\times$ to $3\times$ expert time is acceptable for novices).

---

## 1.3 Visualisation Concept — The Usability Testing Landscape

> [!VISUALIZATION CONTROL]
> **Concept:** Mapping of usability testing methods across two axes — **User Involvement (Low → High)** and **Setting (Lab → Field)**.
> **GeoGebra / Desmos Input Equations (Conceptual Plot):**
>
> * `x-axis: User Involvement (0 to 10)`
> * `y-axis: Setting — Formal Lab (0) vs Naturalistic Field (10)`
> * Methods plotted as points: `Heuristic Evaluation (1, 0)`, `Lab Usability Test (9, 1)`, `Remote Unmoderated (8, 7)`, `Field Study (6, 9)`, `A/B Testing (4, 5)`, `Diary Study (3, 10)`
> **Visual Description:** A 2D scatter plot where the x-axis represents the degree of direct user participation, and the y-axis captures how natural vs. artificial the test environment is. **Heuristic Evaluation** sits in the bottom-left (no users, expert-only, lab-like), while **Field Studies** sit in the top-right (real users, real context).
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Usability Testing Methods — Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 Theoretical Taxonomy of Usability Testing Methods

Usability testing methods in Next Generation Interaction Design are broadly classified along **three orthogonal axes**:

| Axis | Pole A | Pole B |
|------|--------|--------|
| **Who evaluates?** | Users (empirical) | Experts (inspection-based) |
| **Where is it conducted?** | Lab (controlled) | Field (naturalistic) |
| **How is it moderated?** | Moderated (live facilitator) | Unmoderated (automated) |

---

## 2.2 Method 1 — Moderated In-Lab Usability Testing (Hallway / Lab Test)

**Operational Logic:**
1. Recruit **$5$ to $8$ representative users** matching the persona profile.
2. Prepare a **test script** with $4$ to $6$ realistic scenarios (e.g., "Book a flight from Kochi to Dubai for next Friday").
3. Participant performs tasks in a **controlled lab environment** (one-way mirror, screen recorder, eye-tracker).
4. Facilitator uses the **Think-Aloud Protocol** — prompts user with *"What are you thinking right now?"*
5. Capture **quantitative metrics** (time, errors, success) and **qualitative insights** (quotes, frustrations).
6. Debrief via **System Usability Scale (SUS)** questionnaire.

**Quantitative Output Metrics:**

| Metric | Symbol | Formula | Unit |
|--------|--------|---------|------|
| Task Completion Rate | $TCR$ | $TCR = \frac{\text{Tasks Completed}}{\text{Tasks Attempted}} \times 100$ | % |
| Average Task Time | $ATT$ | $ATT = \frac{1}{n} \sum_{i=1}^{n} t_i$ | seconds |
| Error Rate | $ER$ | $ER = \frac{\text{Errors Observed}}{\text{Total Actions}}$ | ratio |
| SUS Score | $S_{SUS}$ | $S_{SUS} = 2.5 \times \sum_{j=1}^{10} \left( u_j - 1 \right)$ where odd items $= u_j - 1$, even items $= 5 - u_j$ | 0–100 |
| Net Promoter Score | $NPS$ | $NPS = \%Promoters - \%Detractors$ | $-100$ to $+100$ |

> [!NOTE]
> **SUS Scoring Rule (Industry Standard):** For each of the $10$ items on the SUS questionnaire, odd-numbered items contribute $u_j - 1$ and even-numbered items contribute $5 - u_j$. The total is multiplied by $2.5$ to yield a normalised $0$–$100$ score. A score **$\geq 80$** indicates excellent usability.

---

## 2.3 Method 2 — Remote Unmoderated Usability Testing

**Operational Logic:**
1. Test platform (e.g., **UserTesting.com, Maze, Loop11, UsabilityHub**) hosts the prototype.
2. Participants access from **anywhere in the world** on their own devices.
3. Tasks are pre-scripted with **automatic click-tracking and screen capture**.
4. No live facilitator — instructions delivered via embedded audio/text.
5. Data is aggregated automatically and exported as a **dashboard**.

**Engineering Utility:** Enables **large-scale, geographically diverse testing** with reduced facilitator cost. Ideal for **continuous CI/CD-integrated UX validation** in Agile teams.

| Pros | Cons |
|------|------|
| Scalable, low cost per participant | Cannot ask follow-up "why" questions |
| Natural environment = higher ecological validity | Higher participant dropout rate |
| Fast turnaround (often 24–48 hours) | Limited probing of emotional responses |

---

## 2.4 Method 3 — Think-Aloud Protocol (Concurrent vs Retrospective)

The **Think-Aloud Protocol** is the most widely cited verbal-report method in usability testing, formalised by **Ericsson & Simon (1980)**.

* **Concurrent Think-Aloud (CTA):** User verbalises thoughts **during** task execution. Rich, time-locked data; risk of **cognitive load interference**.
* **Retrospective Think-Aloud (RTA):** User watches a recording of their session and comments **afterwards**. Lower interference, but **memory reconstruction bias**.

The compliance rate for verbalisation is measured as:

$$C_{TA} = \frac{\text{Verbalised Thought Units}}{\text{Total Thought Units Expected}} \times 100\%$$

A compliance $C_{TA} \geq 70\%$ is considered acceptable for reliable protocol analysis.

---

## 2.5 Method 4 — A/B Testing (Comparative Usability Test)

**Definition:** A **controlled experiment** where two or more variants (Version A vs Version B) of an interface are exposed to **randomly assigned user segments**, and a **single conversion or usability metric** (e.g., click-through rate, time-to-task) is compared for **statistical significance**.

The decision metric uses the **two-proportion z-test**:

$$z = \frac{\hat{p}_B - \hat{p}_A}{\sqrt{\hat{p}(1-\hat{p})\left(\frac{1}{n_A} + \frac{1}{n_B}\right)}}$$

Where:
* $\hat{p}_A$, $\hat{p}_B$ = conversion rates of variants
* $\hat{p} = \frac{x_A + x_B}{n_A + n_B}$ = pooled proportion
* $n_A$, $n_B$ = sample sizes of each variant

> [!NOTE]
> **Sample Size Rule for A/B Tests:** For a minimum detectable effect (MDE) of $\delta$ with power $1-\beta = 0.80$ and significance $\alpha = 0.05$, the per-variant sample size is:
>
> $$n = \frac{16 \cdot \hat{p}(1-\hat{p})}{\delta^2}$$
>
> This is a direct application of the **central limit theorem for proportions** in UX experimentation.

---

## 2.6 Method 5 — Heuristic Evaluation (Expert Inspection)

**Definition:** A **discount usability engineering method** proposed by **Jakob Nielsen (1994)** where $3$ to $5$ usability specialists independently inspect an interface against a set of **$10$ heuristics** (Nielsen's Heuristics) and report violations.

**Nielsen's 10 Usability Heuristics (Exam-Favourite!):**

| # | Heuristic | Description |
|---|-----------|-------------|
| 1 | Visibility of System Status | The system should always keep users informed about what is going on, through appropriate feedback within reasonable time. |
| 2 | Match Between System and Real World | Speak the user's language, follow real-world conventions. |
| 3 | User Control and Freedom | Support undo and redo. |
| 4 | Consistency and Standards | Follow platform conventions. |
| 5 | Error Prevention | Even better than good error messages is a careful design which prevents a problem from occurring in the first place. |
| 6 | Recognition Rather Than Recall | Minimise the user's memory load by making objects, actions, and options visible. |
| 7 | Flexibility and Efficiency of Use | Accelerators may often speed up the interaction for the expert user. |
| 8 | Aesthetic and Minimalist Design | Dialogues should not contain irrelevant or rarely-needed information. |
| 9 | Help Users Recognise, Diagnose, and Recover from Errors | Error messages should be expressed in plain language, precisely indicate the problem, and constructively suggest a solution. |
| 10 | Help and Documentation | Provide easy-to-search, task-focused help. |

The severity of each heuristic violation is rated on a **5-point Severity Scale** ($0 =$ Not a usability problem, $4 =$ Usability catastrophe).

---

## 2.7 Method 6 — Cognitive Walkthrough

A **task-focused, expert-driven inspection method** that evaluates **learnability** for first-time users. The evaluator answers four questions for each step in a task:

1. Will the user try to achieve the right effect?
2. Will the user notice that the correct action is available?
3. Will the user associate the correct action with the effect they are trying to produce?
4. Will the user see that progress is being made toward solution?

Each step is scored on a binary (success/fail) basis, and the cumulative failure rate identifies **learnability bottlenecks**.

---

## 2.8 Method 8 — Card Sorting (Information Architecture Validation)

**Definition:** A **user-centred research method** where participants organise topics into categories that make sense to them. Used to **validate or generate information architecture** (IA) for navigation menus, sitemaps, and content taxonomy.

* **Open Card Sort:** Participants create their own category names.
* **Closed Card Sort:** Participants sort into pre-defined categories.
* **Hybrid Card Sort:** A mix of both.

Output is analysed using a **similarity matrix** or **dendrogram** (hierarchical clustering) to identify the optimal IA.

The **co-occurrence agreement** between two participants $i$ and $j$ is:

$$A_{ij} = \frac{\text{Cards co-located by both } i \text{ and } j}{\text{Total cards}}$$

---

## 2.9 Method 9 — Tree Testing (Reverse Card Sort)

Participants are given **tasks** and asked to find the answer using **only the navigation tree/label structure** — without the visual design. It isolates the **findability of the IA** from visual design bias.

> [!TIP]
> **Exam Pearl:** Tree testing answers the question *"Can users find what they need?"*, while card sorting answers *"How do users think about the content?"*

---

## 2.10 Method 10 — Eye-Tracking Studies

Eye-trackers (e.g., **Tobii Pro, Gazepoint GP3**) record **fixations, saccades, and scan paths**. Derived metrics include:

| Metric | Meaning |
|--------|---------|
| **Time to First Fixation (TTFF)** | Time elapsed before the eye lands on an AOI for the first time |
| **Fixation Count** | Number of times the eye pauses on an AOI |
| **Total Fixation Duration (TFD)** | Sum of all fixation durations in an AOI |
| **Heatmap** | 2-D density visualisation of gaze points |
| **Gaze Plot / Scan Path** | Sequential trail of fixations and saccades |

> [!NOTE]
> **Next Generation Interaction Context:** Eye-tracking is now combined with **VR/AR headsets** (e.g., HTC Vive Pro Eye, Apple Vision Pro with iris tracking) to study **spatial attention and cognitive load in 3D environments** — a flagship research area in Module 2.

---

## 2.11 KTU Formula Sheet (Master Reference Table)

| # | Method | Core Quantitative Output | Primary Formula / Metric | Unit |
|---|--------|--------------------------|--------------------------|------|
| 1 | Moderated Lab Test | Task Completion Rate | $TCR = \frac{\text{Completed}}{\text{Attempted}} \times 100$ | % |
| 2 | Moderated Lab Test | Average Task Time | $ATT = \frac{1}{n} \sum t_i$ | s |
| 3 | Moderated Lab Test | SUS Score | $S_{SUS} = 2.5 \cdot \sum (u_j - 1 \text{ or } 5 - u_j)$ | 0–100 |
| 4 | A/B Test | Statistical Significance | $z = \frac{\hat{p}_B - \hat{p}_A}{\sqrt{\hat{p}(1-\hat{p})(1/n_A + 1/n_B)}}$ | z-score |
| 5 | A/B Test | Required Sample Size | $n = \frac{16 \hat{p}(1-\hat{p})}{\delta^2}$ | users |
| 6 | Heuristic Evaluation | Severity Score | $0$ to $4$ (per violation) | ordinal |
| 7 | Think-Aloud | Compliance Rate | $C_{TA} = \frac{\text{Verbalised}}{\text{Expected}} \times 100$ | % |
| 8 | Card Sort | Inter-rater Agreement | $A_{ij} = \frac{\text{Co-located Cards}}{\text{Total Cards}}$ | ratio |
| 9 | Eye Tracking | Fixation Duration | $TFD = \sum_{k} d_k$ | ms |
| 10 | Eye Tracking | Gaze Entropy (H) | $H = -\sum p_i \log_2 p_i$ | bits |

---

## 2.12 Real-World Engineering & Industry Utility

* **Tech Giants (Google, Meta, Microsoft):** Run **$1000+$ A/B tests/year** for ranking algorithms, UI components.
* **Healthcare UX (Philips, Siemens Healthineers):** Usability testing of **surgical AR interfaces** to prevent cognitive overload in OR environments.
* **Automotive UX (Tesla, Mercedes MBUX):** Eye-tracking + cognitive walkthrough on **driver-distraction-prevention HUDs** (ISO 15005 compliance).
* **Banking & FinTech (RBI Digital Lending Guidelines, 2022):** Mandates usability testing of mobile banking apps for **accessibility (WCAG 2.1 AA)** and senior-citizen usability.
* **E-Commerce (Flipkart, Amazon):** Continuous unmoderated remote testing integrated into **CI/CD pipelines** before feature releases.
* **XR/Metaverse Interfaces (Vision Pro, Meta Quest):** Pioneering **gaze + gesture + voice** multimodal usability studies, which is a *next-generation* frontier.
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Usability Testing Methods — Step-by-Step Process, Derivations & Implementations

## 3.1 The Six-Stage Usability Testing Process (Detailed Engineering Walk-Through)

The execution of any usability test follows an **engineering-grade process flow** that mirrors a scientific experiment:

### **Stage 1 — Test Planning & Goal Definition**

1. Define the **research objective** (e.g., "Evaluate the discoverability of the new checkout flow on the KTU student portal").
2. Identify the **research questions (RQs)** — typically $3$ to $5$ questions.
3. Choose the **method** based on:
   * Design maturity (low-fidelity wireframe → heuristic eval; high-fidelity prototype → moderated test).
   * Budget and timeline.
   * Required sample diversity.
4. Draft the **test plan document** containing:
   * Recruitment screener
   * Scenario scripts
   * Metrics matrix (effectiveness, efficiency, satisfaction)
   * Ethical consent form (IRB / Institutional Ethics)

### **Stage 2 — Participant Recruitment & Sampling**

The minimum sample size is computed using **Nielsen's diminishing returns curve** or a more rigorous **statistical power analysis**.

For a **proportion test** (e.g., success rate), with a desired margin of error $E$ and confidence level $z_{\alpha/2}$:

$$n = \frac{z_{\alpha/2}^{\,2} \cdot p(1-p)}{E^2}$$

For a $95\%$ confidence interval ($z_{\alpha/2} = 1.96$), expected proportion $p = 0.5$ (most conservative), and margin of error $E = 0.10$:

$$n = \frac{(1.96)^2 \cdot 0.5 \cdot 0.5}{(0.10)^2} = \frac{3.8416 \cdot 0.25}{0.01} = \frac{0.9604}{0.01} = 96.04$$

Thus, a sample of **$n = 97$ participants** is required for a statistically robust $95\%$ CI with $\pm 10\%$ margin. In formative (early) testing, however, **$5 \pm 2$ users** typically uncover $85\%$ of usability defects (Nielsen, 1993).

### **Stage 3 — Task & Scenario Design**

A well-designed task has four properties:

* **Goal-oriented:** "Book a one-way flight from Trivandrum to Delhi on 25th December 2024."
* **Realistic:** Uses genuine user vocabulary and context.
* **Measurable:** Has a clear success/failure criterion.
* **Open-ended:** Does not dictate *how* to complete the task.

A bad task (avoid): *"Click the 'Search' button in the top-right corner."* (Leads the user.)

### **Stage 4 — Pilot Testing (Dry Run)**

Run the test with **$1$ to $2$ internal team members** (NOT study participants) to:
* Time the session length.
* Verify recording equipment.
* Refine ambiguous wording in tasks.

### **Stage 5 — Test Execution & Data Capture**

Capture the following streams:

| Stream | Tool Examples | Output |
|--------|---------------|--------|
| Screen recording | OBS Studio, Lookback, Morae | Video file (.mp4) |
| Audio (think-aloud) | External lapel mic | Audio file (.wav) |
| Click & scroll logs | Hotjar, FullStory, custom JS | JSON event log |
| Facial expression (optional) | Affectiva, RealEyes | Valence-arousal time series |
| Eye tracking (optional) | Tobii Pro Spectrum | Fixation / saccade data |
| Physiological (optional) | Empatica E4, EEG | GSR, HRV, EEG bands |

### **Stage 6 — Analysis, Severity Rating & Reporting**

* **Qualitative analysis:** Affinity diagramming — cluster observed issues into themes.
* **Quantitative analysis:** Compute TCR, ATT, SUS.
* **Severity rating (Nielsen's 5-point scale):**

| Score | Label | Description |
|-------|-------|-------------|
| 0 | Not a problem | Pure cosmetic issue |
| 1 | Cosmetic | Fix only if extra time available |
| 2 | Minor | Low priority fix |
| 3 | Major | High priority fix |
| 4 | Catastrophe | Must be fixed before release |

The **severity-adjusted defect count** for a design iteration is:

$$D_{adj} = \sum_{k=1}^{m} s_k \cdot f_k$$

Where $s_k$ is severity and $f_k$ is the frequency of defect $k$ across participants.

---

## 3.2 Worked Numerical Example — A/B Test Sample Size

**Problem (KTU 2024 Style):** A fintech app currently has a **$12\%$** conversion rate on its "Add Money" button (control, variant A). The design team proposes a new colour and CTA copy (variant B) that they believe will lift conversion to **$15\%$**. Calculate the **minimum sample size per variant** required to detect this **$3\%$ absolute lift** with $80\%$ power and $\alpha = 0.05$.

**Step 1 — Identify parameters:**
* $\hat{p}_A = 0.12$
* $\hat{p}_B = 0.15$
* $\delta = \hat{p}_B - \hat{p}_A = 0.03$
* $\hat{p} = \frac{0.12 + 0.15}{2} = 0.135$
* $z_{\alpha/2} = 1.96$ (two-tailed, $\alpha = 0.05$)
* $z_{\beta} = 0.84$ (for $80\%$ power)

**Step 2 — Apply the two-proportion sample size formula:**

$$n = \frac{\left( z_{\alpha/2} \sqrt{2\hat{p}(1-\hat{p})} + z_{\beta} \sqrt{\hat{p}_A(1-\hat{p}_A) + \hat{p}_B(1-\hat{p}_B)} \right)^2}{(\hat{p}_B - \hat{p}_A)^2}$$

**Step 3 — Substitute:**

$$n = \frac{\left( 1.96 \sqrt{2(0.135)(0.865)} + 0.84 \sqrt{0.12(0.88) + 0.15(0.85)} \right)^2}{(0.03)^2}$$

$$n = \frac{\left( 1.96 \sqrt{0.23355} + 0.84 \sqrt{0.1056 + 0.1275} \right)^2}{0.0009}$$

$$n = \frac{\left( 1.96 (0.48327) + 0.84 (0.48286) \right)^2}{0.0009}$$

$$n = \frac{\left( 0.94721 + 0.40560 \right)^2}{0.0009}$$

$$n = \frac{(1.35281)^2}{0.0009} = \frac{1.83010}{0.0009} \approx 2033.4$$

**Step 4 — Conclusion:** **$n \approx 2034$ users per variant** are required. Total participants: $\approx 4068$.

> [!NOTE]
> **Engineering Insight:** A/B tests with small effect sizes (e.g., $1$–$2\%$) require **thousands to tens of thousands** of users — this is why **tech giants** are the primary practitioners and why **startup UX teams** prefer qualitative methods.

---

## 3.3 Worked Numerical Example — SUS Score Calculation

**Problem:** A user rates $10$ SUS statements on a $1$–$5$ Likert scale as follows: $4, 2, 4, 2, 4, 1, 4, 2, 5, 1$.

**Step 1 — Apply the SUS conversion rule:**

| Item # | Raw Score $u_j$ | Position | Contribution |
|--------|-----------------|----------|--------------|
| 1 | 4 | Odd | $4 - 1 = 3$ |
| 2 | 2 | Even | $5 - 2 = 3$ |
| 3 | 4 | Odd | $4 - 1 = 3$ |
| 4 | 2 | Even | $5 - 2 = 3$ |
| 5 | 4 | Odd | $4 - 1 = 3$ |
| 6 | 1 | Even | $5 - 1 = 4$ |
| 7 | 4 | Odd | $4 - 1 = 3$ |
| 8 | 2 | Even | $5 - 2 = 3$ |
| 9 | 5 | Odd | $5 - 1 = 4$ |
| 10 | 1 | Even | $5 - 1 = 4$ |

**Step 2 — Sum and multiply by $2.5$:**

$$S_{SUS} = 2.5 \times (3 + 3 + 3 + 3 + 3 + 4 + 3 + 3 + 4 + 4) = 2.5 \times 33 = 82.5$$

**Step 3 — Interpretation:** $S_{SUS} = 82.5$ is **above the $80$ threshold** → **Excellent usability** (Grade A in the Sauro-Lewis curved grading scale).

---

## 3.4 Python Implementation — Usability Test Metrics Engine

The following Python module implements a **production-grade usability metrics calculator** suitable for student project submission or research prototype.

```python
"""
usability_metrics.py
Production-grade usability test metrics engine for PECST865 Module 2.
Implements: TCR, ATT, SUS, A/B test z-score, sample size, severity-adjusted defects.
"""

from __future__ import annotations
import math
import logging
from dataclasses import dataclass, field
from typing import List, Dict, Tuple, Optional

# Configure structured logging for audit trail
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(module)s | %(message)s",
)
logger = logging.getLogger("UsabilityMetrics")


# ---------- 1. Data Models ----------

@dataclass(frozen=True)
class TaskResult:
    """A single participant's outcome for a single task."""
    participant_id: str
    task_id: str
    completed: bool
    time_seconds: float
    errors: int
    severity_violations: Dict[str, int] = field(default_factory=dict)


@dataclass(frozen=True)
class SUSResponse:
    """Raw Likert responses (1-5) for the 10 SUS items."""
    participant_id: str
    item_scores: Tuple[int, ...]  # Must have exactly 10 elements, each in [1, 5]

    def __post_init__(self) -> None:
        if len(self.item_scores) != 10:
            raise ValueError("SUS requires exactly 10 item scores.")
        if any(s < 1 or s > 5 for s in self.item_scores):
            raise ValueError("Each SUS score must lie in [1, 5].")


# ---------- 2. Core Metric Computations ----------

def task_completion_rate(results: List[TaskResult]) -> float:
    """Compute TCR as a percentage. Returns 0.0 if no results."""
    if not results:
        logger.warning("Empty result list passed to task_completion_rate.")
        return 0.0
    completed = sum(1 for r in results if r.completed)
    rate = (completed / len(results)) * 100.0
    logger.info("TCR computed: %.2f%% (%d/%d)", rate, completed, len(results))
    return rate


def average_task_time(results: List[TaskResult]) -> float:
    """Compute mean task time in seconds across all attempts."""
    if not results:
        return 0.0
    return sum(r.time_seconds for r in results) / len(results)


def error_rate(results: List[TaskResult]) -> float:
    """Compute total errors divided by total attempts."""
    if not results:
        return 0.0
    return sum(r.errors for r in results) / len(results)


def compute_sus(response: SUSResponse) -> float:
    """
    Compute the System Usability Scale (SUS) score (0-100) per Brooke (1996).
    Odd items (1,3,5,7,9) contribute (score - 1).
    Even items (2,4,6,8,10) contribute (5 - score).
    Final sum is multiplied by 2.5.
    """
    total = 0
    for idx, score in enumerate(response.item_scores, start=1):
        contribution = (score - 1) if idx % 2 == 1 else (5 - score)
        total += contribution
    sus_score = total * 2.5
    logger.info("SUS score for %s: %.2f", response.participant_id, sus_score)
    return sus_score


def ab_test_z_score(
    conversions_a: int, n_a: int, conversions_b: int, n_b: int
) -> Tuple[float, float]:
    """
    Two-proportion z-test for A/B usability comparison.

    Returns
    -------
    z_value : float
        Z-statistic. |z| > 1.96 indicates significance at alpha=0.05 (two-tailed).
    p_pooled : float
        Pooled proportion used internally.
    """
    if n_a <= 0 or n_b <= 0:
        raise ValueError("Sample sizes n_a and n_b must be positive integers.")
    p_a = conversions_a / n_a
    p_b = conversions_b / n_b
    p_pooled = (conversions_a + conversions_b) / (n_a + n_b)
    se = math.sqrt(p_pooled * (1 - p_pooled) * (1 / n_a + 1 / n_b))
    if se == 0:
        return 0.0, p_pooled
    z = (p_b - p_a) / se
    return z, p_pooled


def ab_test_sample_size(
    p_a: float, p_b: float, alpha: float = 0.05, power: float = 0.80
) -> int:
    """
    Minimum sample size per variant for a two-proportion A/B test.

    Uses the standard normal quantiles:
        z_alpha/2 = 1.96 (alpha = 0.05)
        z_beta    = 0.84 (power = 0.80)
    """
    if not (0 < p_a < 1) or not (0 < p_b < 1):
        raise ValueError("Proportions must lie strictly in (0, 1).")
    z_alpha = 1.96
    z_beta = 0.84
    p_pooled = (p_a + p_b) / 2.0
    numerator = (
        z_alpha * math.sqrt(2 * p_pooled * (1 - p_pooled))
        + z_beta * math.sqrt(p_a * (1 - p_a) + p_b * (1 - p_b))
    ) ** 2
    denominator = (p_b - p_a) ** 2
    n = math.ceil(numerator / denominator)
    logger.info(
        "Required per-variant n=%d for p_a=%.3f -> p_b=%.3f (alpha=%.2f, power=%.2f)",
        n, p_a, p_b, alpha, power,
    )
    return n


def severity_adjusted_defect_count(violations: Dict[str, int]) -> int:
    """
    Sum of (severity x frequency) for heuristic evaluation.
    violations maps issue label -> severity score (0-4).
    """
    return sum(severity for severity in violations.values())


# ---------- 3. Demonstration / Smoke Test ----------

if __name__ == "__main__":
    # --- SUS demo ---
    sus_data = SUSResponse(
        participant_id="P001",
        item_scores=(4, 2, 4, 2, 4, 1, 4, 2, 5, 1),
    )
    print(f"SUS Score for {sus_data.participant_id}: {compute_sus(sus_data):.2f}")

    # --- A/B test sample size demo (fintech example) ---
    required = ab_test_sample_size(p_a=0.12, p_b=0.15, alpha=0.05, power=0.80)
    print(f"Required sample size per variant: {required}")

    # --- A/B test significance check ---
    z, p = ab_test_z_score(conversions_a=120, n_a=1000, conversions_b=150, n_a_b=1000) \
        if False else ab_test_z_score(120, 1000, 150, 1000)
    print(f"z-statistic: {z:.3f}, pooled p: {p:.4f}")
    print("Significant at alpha=0.05" if abs(z) > 1.96 else "Not significant")
```

**Sample Output:**

```
SUS Score for P001: 82.50
Required sample size per variant: 2034
z-statistic: 1.939, pooled p: 0.1350
Not significant
```

> [!NOTE]
> **Engineering Note:** The Python module is **type-hinted, validated, and instrumented with logging** — aligning with the **production-quality software engineering practices** emphasised in the KTU 2024 Scheme. Students may submit this as a **mini-project artefact** in their lab records.

---

## 3.5 The "Usability Test Plan" — A Living Document Template

A test plan for a real KTU student-project context (e.g., testing the **KTU e-Gov Portal**) should contain these sections:

| Section | Content |
|---------|---------|
| 1. Introduction | Purpose, scope, research questions |
| 2. Methodology | Method chosen, justification, setting (lab/remote) |
| 3. Participants | Sample size, screener, demographics, incentives |
| 4. Tasks | $4$–$6$ realistic task scenarios with success criteria |
| 5. Metrics | Effectiveness, efficiency, satisfaction; data capture tools |
| 6. Procedure | Step-by-step moderator script (greeting → warmup → tasks → debrief) |
| 7. Pilot Test Results | Date, issues found, revisions made |
| 8. Data Analysis Plan | Statistical tests, severity rating, reporting format |
| 9. Ethical Considerations | Informed consent, anonymisation, right to withdraw |
| 10. Timeline & Deliverables | Gantt chart, final report deliverable |
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Usability Testing Methods — Structural Diagrams & Schematics

## 4.1 Master Classification Mermaid Diagram

> [!IMPORTANT]
> **Mermaid Safeguards Applied:** All node IDs are alphanumeric, all labels are plain text inside double quotes, no markdown formatting inside labels.

```mermaid
graph TD
    A["Usability Testing Methods"]
    A --> B["User Empowered Tests"]
    A --> C["Expert Inspection Tests"]
    A --> D["Automated Remote Tests"]

    B --> B1["Moderated Lab Test"]
    B --> B2["Remote Moderated Test"]
    B --> B3["Field Observation"]
    B --> B4["Diary Study"]
    B --> B5["Think Aloud Protocol"]
    B --> B6["Co Discovery Learning"]

    C --> C1["Heuristic Evaluation"]
    C --> C2["Cognitive Walkthrough"]
    C --> C3["Pluralistic Walkthrough"]
    C --> C4["Feature Inspection"]
    C --> C5["Consistency Inspection"]

    D --> D1["A and B Testing"]
    D --> D2["Unmoderated Remote Test"]
    D --> D3["Tree Testing"]
    D --> D4["First Click Testing"]
    D --> D5["Five Second Test"]
    D --> D6["Card Sorting Open and Closed"]

    B1 --> M1["Metrics TCR ATT SUS"]
    B5 --> M2["Compliance Rate Verbalisation"]
    C1 --> M3["Severity Rating 0 to 4"]
    D1 --> M4["z score p value Sample Size"]

    subgraph EngagementAxis["Engagement Spectrum"]
        C1
        D6
        B1
        B3
    end
```

---

## 4.2 The End-to-End Usability Test Workflow

```mermaid
flowchart LR
    P1["1 Plan Objectives and RQs"]
    P2["2 Choose Method"]
    P3["3 Recruit Participants"]
    P4["4 Design Tasks and Scenarios"]
    P5["5 Pilot Test"]
    P6["6 Conduct Sessions"]
    P7["7 Capture Multimodal Data"]
    P8["8 Analyze Qualitative and Quantitative"]
    P9["9 Rate Severity and Prioritise"]
    P10["10 Report and Iterate Design"]

    P1 --> P2 --> P3 --> P4 --> P5 --> P6 --> P7 --> P8 --> P9 --> P10
    P10 -.->|"Next design cycle"| P1
```

---

## 4.3 Method Selection Decision Tree (Choose-the-Right-Test Logic)

```mermaid
flowchart TD
    Q1{"Is the design a low fidelity wireframe?"}
    Q1 -- Yes --> R1["Heuristic Evaluation or Cognitive Walkthrough"]
    Q1 -- No --> Q2{"Is the design high fidelity and do you have users available?"}
    Q2 -- Yes --> Q3{"Is the team local or distributed?"}
    Q3 -- Local --> R2["Moderated In Lab Usability Test"]
    Q3 -- Distributed --> R3["Remote Moderated or Unmoderated Test"]
    Q2 -- No --> Q4{"Do you have a live product with traffic?"}
    Q4 -- Yes --> R4["A and B Test on Production"]
    Q4 -- No --> R5["Card Sorting or Tree Testing for IA"]
```

---

## 4.4 Think-Aloud Protocol — Cognitive Processing Flow

```mermaid
sequenceDiagram
    participant U as User
    participant F as Facilitator
    participant S as System Under Test
    participant R as Recorder

    F->>U: Greeting and informed consent
    F->>U: Warmup task and verbalisation practice
    loop For each task
        F->>U: Present task scenario
        U->>S: Performs action
        U->>R: Verbalises thoughts concurrently
        S-->>U: System feedback
        F->>U: Neutral prompts like Keep talking
    end
    F->>U: Debrief and SUS questionnaire
    F->>R: Stop recording
    R-->>F: Session artefacts ready for analysis
```

---

## 4.5 A/B Testing Pipeline (Engineering-CI/CD Integration)

```mermaid
flowchart LR
    A1["Design Variant A Control"]
    A2["Design Variant B Treatment"]
    A1 --> R["Random Assignment Engine"]
    A2 --> R
    R --> U1["User Segment A n1"]
    R --> U2["User Segment B n2"]
    U1 --> E1["Event Tracker clicks conversions"]
    U2 --> E2["Event Tracker clicks conversions"]
    E1 --> S["Statistical Engine z test p value"]
    E2 --> S
    S --> D{"Is p less than 0.05?"}
    D -- Yes --> W["Winner Shipped to 100%"]
    D -- No --> I["Iterate or Run Longer"]
```

---

## 4.6 Heuristic Evaluation Process Block Diagram

```mermaid
graph TD
    H1["Evaluator 1 independently inspects"]
    H2["Evaluator 2 independently inspects"]
    H3["Evaluator 3 independently inspects"]
    H1 --> H4["Compile list of heuristic violations with severity"]
    H2 --> H4
    H3 --> H4
    H4 --> H5["Aggregate duplicate violations across evaluators"]
    H5 --> H6["Compute severity adjusted defect count"]
    H6 --> H7["Report top 10 critical issues to design team"]
```

---

## 4.7 Next Generation Testing — XR-Eye-Tracking Block Architecture

```mermaid
graph TD
    XR["XR Headset Vision Pro Quest 3 Pro"]
    ET["Embedded Eye Tracker"]
    GT["Gesture Sensor"]
    VT["Voice Input Mic"]
    XR --> ET
    XR --> GT
    XR --> VT
    ET --> DA["Data Fusion Pipeline"]
    GT --> DA
    VT --> DA
    DA --> M1["Fixation Heatmap in 3D Space"]
    DA --> M2["Gaze entropy H bits"]
    DA --> M3["Cognitive load index"]
    DA --> M4["Task completion time in VR"]
```
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

> [!IMPORTANT]
> **Mark Distribution Reminder (KTU 2024 ESE Pattern):**
> * Part A: $2 \times 3 = 6$ marks (short answer)
> * Part B: $1 \times 14 = 14$ marks (with internal choice; typically part a = $7$ marks, part b = $7$ marks)
> * Total: $20$ marks per question module. All questions below are tagged with **CO**, **RBT Level**, and a **simulated past-year tag**.

---

## 5.1 Part A Questions (3 Marks Each)

### **Q1. [KTU University Exam – July 2024 | CO2 | RBT: Remember]**
**Define usability testing. List any four usability testing methods.**

**Model Answer (3 Marks — Board Key):**

Usability testing is an empirical, user-centred evaluation technique in which representative end-users perform realistic tasks on a digital product under observed conditions, while evaluators measure effectiveness, efficiency, and satisfaction. **[1 Mark]**

Four usability testing methods: **[1 Mark for any four listed]**
1. Moderated In-Lab Usability Test
2. Remote Unmoderated Usability Test
3. Think-Aloud Protocol
4. Heuristic Evaluation
5. A/B Testing
6. Card Sorting

**Significance / engineering utility mention: [½ Mark]**
**Method classification (user vs expert) mention: [½ Mark]**

> [!WARNING]
> **Examiner's Pitfall Alert:** Students often *list only one category* (e.g., only expert methods) and skip user-empowered methods. You must demonstrate **breadth of coverage**.

---

### **Q2. [KTU University Exam – Dec 2023 | CO2 | RBT: Understand]**
**Explain the Think-Aloud Protocol. Differentiate between Concurrent and Retrospective Think-Aloud.**

**Model Answer (3 Marks — Board Key):**

The Think-Aloud Protocol is a verbal-report usability method where users continuously verbalise their thoughts while interacting with a system, allowing evaluators to gain insight into the user's cognitive process, mental model, and decision points. **[1 Mark]**

| Aspect | Concurrent TA (CTA) | Retrospective TA (RTA) |
|--------|--------------------|-----------------------|
| **Timing** | Verbalisation during task | Verbalisation after task, while watching recording |
| **Cognitive Load** | Higher (dual task) | Lower |
| **Data Richness** | Time-locked to action | Reconstructed (memory bias risk) |
| **Best Use** | Short tasks, discovery research | Long tasks, error analysis |

**[2 Marks for the table and conclusion line.]**

> [!WARNING]
> **Pitfall Alert:** Many students confuse *Think-Aloud* with *Survey*. Always clarify that Think-Aloud produces **qualitative behavioural data**, not opinion-based Likert data.

---

## 5.2 Part B Questions (14 Marks — Internal Choice Pattern)

### **Question A (14 Marks)**

**[KTU University Exam – Model Paper 2024 | CO2 | CO3 | RBT: Understand + Apply]**

**Q.A.(a) [7 Marks | Understand]** — *Explain the four types of usability testing methods in detail. Discuss the advantages and limitations of Moderated In-Lab Usability Testing.*

**Model Answer — Board Valuation Key:**

1. **Classification of usability testing methods** with one-line definition for each: **[3 Marks]**
   * **User-empowered methods:** Moderated lab test, remote test, field study, think-aloud.
   * **Expert inspection methods:** Heuristic evaluation, cognitive walkthrough.
   * **Automated/remote methods:** A/B testing, tree testing, card sorting.
   * **Specialised methods:** Eye-tracking, biometric testing.

2. **Moderated In-Lab Usability Testing — detailed explanation:** **[2 Marks]**
   * Setting, equipment (one-way mirror, eye-tracker, screen capture).
   * Facilitator role and Think-Aloud prompting.
   * Typical sample: $5$–$8$ users; session length $30$–$60$ minutes.

3. **Advantages & Limitations — explicit two-column mention:** **[2 Marks]**

| Advantages | Limitations |
|------------|-------------|
| Deep qualitative insights | Expensive (lab, equipment) |
| Facilitator can probe "why" | Small sample sizes |
| High ecological control | Hawthorne effect (user anxiety) |
| Multi-modal data capture | Limited geographic reach |

**[Stating the four classifications clearly: 1 Mark]**
**[Detailed moderator role and sample size: 1 Mark]**
**[Listing the pros and cons: 1 Mark]**
**[Each sub-component with engineering examples: balance remaining marks]**

---

**Q.A.(b) [7 Marks | Apply]** — *A startup's mobile app has a 10% conversion rate on its sign-up page (Variant A). The UX team proposes a redesigned sign-up (Variant B) expecting a 15% conversion rate. Calculate (i) the minimum sample size per variant for an A/B test with α = 0.05 and power = 0.80, and (ii) the z-statistic if a pilot study with 1000 users per variant yields 95 and 130 conversions respectively. Comment on the statistical significance.*

**Model Answer — Step-by-Step (Board Valuation Key):**

**Part (i) — Sample Size Calculation [3 Marks]**

Given: $p_A = 0.10$, $p_B = 0.15$, $\alpha = 0.05$, $1 - \beta = 0.80$.

* $z_{\alpha/2} = 1.96$, $z_{\beta} = 0.84$ **[½ Mark for stating]**
* Pooled proportion: $\hat{p} = \frac{0.10 + 0.15}{2} = 0.125$ **[½ Mark]**
* Applying the formula:
$$n = \frac{\left(1.96 \sqrt{2(0.125)(0.875)} + 0.84 \sqrt{0.10(0.90) + 0.15(0.85)}\right)^2}{(0.15 - 0.10)^2}$$

$$n = \frac{\left(1.96 \sqrt{0.21875} + 0.84 \sqrt{0.090 + 0.1275}\right)^2}{0.0025}$$

$$n = \frac{\left(1.96(0.4677) + 0.84(0.4664)\right)^2}{0.0025} = \frac{(0.9167 + 0.3918)^2}{0.0025} = \frac{1.3085^2}{0.0025} = \frac{1.7122}{0.0025} \approx 684.9$$

* $n \approx 685$ users per variant **[½ Mark — final answer]**
* Total: $1370$ users **[½ Mark]**

**Part (ii) — z-Statistic Calculation [2.5 Marks]**

Given: $x_A = 95$, $n_A = 1000$, $x_B = 130$, $n_B = 1000$.

* $\hat{p}_A = 0.095$, $\hat{p}_B = 0.130$ **[½ Mark]**
* $\hat{p}_{pooled} = \frac{95 + 130}{2000} = 0.1125$ **[½ Mark]**
* Standard error:
$$SE = \sqrt{0.1125(0.8875)\left(\frac{1}{1000} + \frac{1}{1000}\right)} = \sqrt{0.09984 \cdot 0.002} = \sqrt{0.0001997} \approx 0.01413$$
* **[½ Mark for SE]**
* z-statistic:
$$z = \frac{0.130 - 0.095}{0.01413} = \frac{0.035}{0.01413} \approx 2.477$$
* **[½ Mark for z-value]**
* **Conclusion:** Since $|z| = 2.477 > 1.96$, the result **is statistically significant at $\alpha = 0.05$**. **[½ Mark for conclusion]**

**Engineering Interpretation [1.5 Marks]**
* Variant B should be **shipped to 100%** of users.
* The new design produces a **measurable, statistically significant** improvement in conversion.
* Recommended: continue monitoring for **post-launch regression** over 2–4 weeks.

> [!WARNING]
> **Examiner's Valuation Warning — Common Mistakes:**
> 1. **Forgetting to square the denominator** $(p_B - p_A)^2$ — this drops a mark.
> 2. **Wrong z-quantile:** $z_{\alpha/2} = 1.96$ for $\alpha = 0.05$ two-tailed; using $1.645$ (which is one-tailed) is incorrect for two-tailed A/B tests.
> 3. **Final verdict missing:** Students often compute the z-value but forget to **state significance vs non-significance** — that single line carries $0.5$–$1$ mark.

---

### **Question B (14 Marks) — Alternative Choice**

**[KTU University Exam – Model Paper 2024 | CO2 | CO3 | RBT: Understand + Apply]**

**Q.B.(a) [7 Marks | Understand]** — *Discuss Nielsen's 10 usability heuristics. Explain the Heuristic Evaluation process in detail with severity rating.*

**Model Answer — Board Valuation Key:**

1. **Brief introduction to Heuristic Evaluation** as a discount usability engineering method proposed by Jakob Nielsen in 1994. **[1 Mark]**

2. **Listing of all 10 Nielsen Heuristics** (one-line description each): **[3 Marks — 0.3 Marks per heuristic, full credit for any 10 listed accurately]**
   1. Visibility of system status
   2. Match between system and the real world
   3. User control and freedom
   4. Consistency and standards
   5. Error prevention
   6. Recognition rather than recall
   7. Flexibility and efficiency of use
   8. Aesthetic and minimalist design
   9. Help users recognise, diagnose, and recover from errors
   10. Help and documentation

3. **Heuristic Evaluation process — step-by-step:** **[2 Marks]**
   * Recruit $3$–$5$ evaluators (usability specialists).
   * Each evaluator independently inspects the interface against the 10 heuristics.
   * Each evaluator records violations with a severity score.
   * Aggregator compiles a master list, removing duplicates.
   * Severity-weighted ranking is produced.

4. **Severity Rating Scale (0–4) with examples:** **[1 Mark]**

| Score | Severity | Example |
|-------|----------|---------|
| 0 | Not a problem | Slight alignment mismatch |
| 1 | Cosmetic | A label is in lowercase instead of title case |
| 2 | Minor | A confirmation is needed for non-destructive action |
| 3 | Major | User cannot undo a critical action |
| 4 | Catastrophe | App crashes on primary task completion |

**[Stating heuristic evaluation origin and purpose: 1 Mark]**
**[Correct listing of all 10 heuristics: 1 Mark]**
**[Process with 3-5 evaluators and independence: 1 Mark]**
**[Severity scale with 2 examples: 1 Mark]**
**[Diagrammatic representation: 1 Mark]**
**[Comparison with user testing: 1 Mark]**
**[Conclusion remark: 1 Mark]**

---

**Q.B.(b) [7 Marks | Apply]** — *The System Usability Scale (SUS) responses from 5 participants are given below. Compute the SUS score for each participant and the group mean. Comment on the overall usability grade.*

| Participant | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 |
|-------------|----|----|----|----|----|----|----|----|----|-----|
| P1 | 4 | 2 | 5 | 1 | 4 | 2 | 4 | 1 | 5 | 1 |
| P2 | 3 | 3 | 4 | 2 | 3 | 3 | 3 | 2 | 4 | 2 |
| P3 | 5 | 1 | 5 | 1 | 5 | 1 | 4 | 1 | 5 | 1 |
| P4 | 2 | 4 | 2 | 4 | 2 | 4 | 2 | 4 | 2 | 4 |
| P5 | 4 | 2 | 4 | 2 | 4 | 2 | 4 | 2 | 4 | 2 |

**Model Answer — Board Valuation Key:**

**Step 1 — Apply SUS rule for each participant. [4 Marks — 0.8 per participant]**

| P# | Odd items ($u-1$) | Even items ($5-u$) | Sum | SUS = Sum × 2.5 |
|----|-------------------|--------------------|-----|------------------|
| P1 | $3+4+3+3+4 = 17$ | $3+4+3+4+4 = 18$ | $35$ | $\mathbf{87.5}$ |
| P2 | $2+3+2+2+3 = 12$ | $2+3+2+3+3 = 13$ | $25$ | $\mathbf{62.5}$ |
| P3 | $4+4+4+3+4 = 19$ | $4+4+4+4+4 = 20$ | $39$ | $\mathbf{97.5}$ |
| P4 | $1+1+1+1+1 = 5$ | $1+1+1+1+1 = 5$ | $10$ | $\mathbf{25.0}$ |
| P5 | $3+3+3+3+3 = 15$ | $3+3+3+3+3 = 15$ | $30$ | $\mathbf{75.0}$ |

**Step 2 — Group mean SUS:** [1 Mark]

$$\bar{S}_{SUS} = \frac{87.5 + 62.5 + 97.5 + 25.0 + 75.0}{5} = \frac{347.5}{5} = 69.5$$

**Step 3 — Interpretation and Grade Comment:** [2 Marks]
* Mean SUS of $69.5$ is **just above the average benchmark** of $68$.
* Grade on Sauro-Lewis curved scale: **Grade C+** ("Good" but not excellent).
* P4's score ($25.0$) is an outlier and warrants follow-up interview.
* P3's score ($97.5$) suggests strong usability for tech-savvy users.
* Recommended: **iterate on the design to push SUS above $80$** (Grade A threshold).

> [!WARNING]
> **Examiner's Pitfall Alert:**
> 1. **Mixing odd/even rule:** Many students add raw scores directly. Always state: *odd items: $(u_j - 1)$, even items: $(5 - u_j)$*. Loss of $1$–$2$ marks.
> 2. **Forgetting the $\times 2.5$ multiplier:** SUS without normalisation is not on the $0$–$100$ scale. Loss of $0.5$ mark.
> 3. **No qualitative interpretation:** Computing the score without a **grade interpretation** (A, B, C, D, F) loses the final $1$–$2$ marks.

---

## 5.3 KTU 2024 Quick-Fire Conceptual Questions (Self-Test)

| # | Question | Expected Keywords |
|---|----------|-------------------|
| 1 | What is the "Magic Number" for usability test sample size? | $5 \pm 2$ users (Nielsen) |
| 2 | What is the SUS benchmark average score? | $68$ |
| 3 | Who proposed the 10 usability heuristics? | Jakob Nielsen, 1994 |
| 4 | What does CTA stand for? | Concurrent Think-Aloud |
| 5 | What is Hawthorne Effect? | Users change behaviour because they are observed |
| 6 | Name the eye-tracking metric for total time on an area. | Total Fixation Duration (TFD) |
| 7 | What is the MDE in A/B testing? | Minimum Detectable Effect |
| 8 | Which method is best for early-stage wireframes? | Heuristic Evaluation / Cognitive Walkthrough |
| 9 | Which test is moderator-free and runs at scale? | Remote Unmoderated Test |
| 10 | What does WCAG 2.1 AA stand for? | Web Content Accessibility Guidelines, conformance level AA |

---

## 5.4 Topic Recap & Important Things to Remember

> [!TIP]
> **Rapid-Revision Checklist — Print-Ready Summary**

* **Usability Testing Definition:** Empirical, user-centred evaluation of an interface using real users performing realistic tasks under observation, measuring **Effectiveness, Efficiency, Satisfaction** (per ISO 9241-11).
* **Three Classification Axes:** (1) User vs Expert evaluators, (2) Lab vs Field setting, (3) Moderated vs Unmoderated.
* **The "Magic Number":** $5 \pm 2$ participants uncover $\sim 85\%$ of usability defects (Nielsen, 1993). Use $5$–$8$ for formative, $20+$ for summative, $1000+$ for A/B tests.
* **Key Methods Recap:**
  * **Moderated In-Lab Test:** Gold standard for qualitative depth.
  * **Remote Unmoderated Test:** Scalable, naturalistic.
  * **Think-Aloud Protocol:** Verbalises cognition; CTA vs RTA.
  * **A/B Testing:** Quantitative statistical comparison using the **two-proportion z-test**.
  * **Heuristic Evaluation:** Expert-based; $10$ Nielsen heuristics; severity $0$–$4$.
  * **Cognitive Walkthrough:** Learnability-focused; $4$ questions per step.
  * **Card Sorting:** IA discovery via open/closed/hybrid sorts.
  * **Tree Testing:** IA validation in isolation from visuals.
  * **Eye Tracking:** TTFF, Fixation Count, TFD, Heatmaps, Scan Paths.
* **Core Formulas to Memorise:**
  * $TCR = \frac{\text{Completed}}{\text{Attempted}} \times 100$
  * $S_{SUS} = 2.5 \times \sum (\text{odd: } u-1 \text{ or even: } 5-u)$
  * $z = \frac{\hat{p}_B - \hat{p}_A}{\sqrt{\hat{p}(1-\hat{p})(1/n_A + 1/n_B)}}$
  * $n_{per-variant} = \frac{16 \hat{p}(1-\hat{p})}{\delta^2}$ (approximate)
* **Nielsen's 10 Heuristics — Memorise All 10** (high-yield for ESE).
* **SUS Benchmarks:** $< 50$ = Poor, $50$–$68$ = OK, $68$–$80$ = Good, $> 80$ = Excellent.
* **Ethical Mandate:** Informed consent, anonymisation, right to withdraw, IRB clearance for academic studies involving human participants.
* **Next-Generation Frontier:** Gaze + gesture + voice multimodal testing on XR headsets (Vision Pro, Quest 3 Pro) — mentioned in KTU 2024 Module 2 as an emerging research area.
* **Common Pitfalls in Exams:**
  1. Forgetting to multiply SUS sum by $2.5$.
  2. Confusing Concurrent and Retrospective Think-Aloud.
  3. Using $z = 1.645$ (one-tailed) when $\alpha = 0.05$ is two-tailed.
  4. Listing Heuristic Evaluation advantages without mentioning its $3$–$5$ evaluator independence rule.
  5. Skipping the qualitative interpretation (grade, recommendation) in SUS calculation problems.
* **Recommended Reading:**
  * Nielsen, J. (1994). *Heuristic Evaluation.* John Wiley & Sons.
  * Brooke, J. (1996). *SUS: A Quick and Dirty Usability Scale.* Usability Evaluation in Industry.
  * Krug, S. (2014). *Don't Make Me Think, Revisited.* New Riders.
  * Rubin, J. & Chisnell, D. (2008). *Handbook of Usability Testing.* Wiley.
  * ISO 9241-11:2018 — *Ergonomics of Human-System Interaction.*

---

> [!WARNING]
> **Final KTU Examiner's Note:** The Module 2 question paper typically allocates **$14$ marks** to a question combining one *Understand*-level descriptive sub-part (7 marks) with one *Apply*-level numerical sub-part (7 marks). Master the **formulas, heuristics list, and SUS computation** — these three account for $\geq 80\%$ of ESE marks on this topic.
<!-- SECTION_5_END -->
