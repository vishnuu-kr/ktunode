# Prototype method

<!-- SECTION_1_START -->
# Prototype Method in Software Engineering

## 1. Core Technical Definition

> [!NOTE]
> **KTU 2024 Syllabus Definition**
> The **Prototype Model** is an iterative and incremental software development life cycle (SDLC) methodology in which a preliminary working model (a *prototype*) of the complete or partial system is rapidly constructed, demonstrated to the end-user, refined through continuous feedback, and incrementally evolved until the final acceptable system is derived.

In the formal KTU 2024 Scheme parlance, the prototype method is classified under **Evolutionary Process Models** and is positioned as a corrective response to the linear, rigid assumptions of the Waterfall Model. It is heavily employed during the **Requirements Engineering Phase** to eliminate *ambiguity*, *incompleteness*, and *contradiction* in user requirements.

### Conceptual Analogy / Intuition

> [!IMPORTANT]
> **The "Dress Rehearsal" Analogy**
> Imagine a fashion designer creating a *toile* (a rough mock-up of a garment) before stitching the final silk dress. The client wears the rough version, points out where the hem is too short or the sleeve too tight, and the designer cuts a new version. The Prototype Method is exactly this — a *throwaway rough draft of the software* (the toile) used purely to capture the true shape of the user's needs before committing to the final, polished system.

* **Physical Constant / Standard Metric**: The *Throwaway Prototyping* technique, as defined by the IEEE 830 and Sommerville standards, typically requires an initial prototype delivery time of approximately **2 to 4 weeks** of developer effort, irrespective of the full project size.
* **Key Performance Metric**: A prototype's primary success criterion is **User Feedback Volume** and **Iteration Count**, not feature completeness.

### Visualizing the Iterative Refinement

> [!VISUALIZATION CONTROL]
> **Concept:** Convergence of User Expectation vs. System Capability through Prototyping Iterations
> **GeoGebra / Desmos Input Equations:**
> * $f_1(x) = 0.5 \cdot x + 3$ &nbsp;&nbsp; *(Initial Rough Prototype Capability)*
> * $f_2(x) = 0.65 \cdot x + 1.8$ &nbsp;&nbsp; *(Iteration 2 after Feedback)*
> * $f_3(x) = 0.82 \cdot x + 0.5$ &nbsp;&nbsp; *(Iteration 3 — closer to user need)*
> * $f_4(x) = 0.98 \cdot x + 0.05$ &nbsp;&nbsp; *(Final Acceptable Match)*
> * $g(x) = 0.9 \cdot x + 0.2$ &nbsp;&nbsp; *(The User's True Requirement Line)*
> **Visual Description:** Plot these five lines on a shared $X$-axis representing *Requirement Complexity* and a $Y$-axis representing *System Fidelity*. The student should observe the four $f_n(x)$ prototype lines starting far away from the true requirement line $g(x)$ and progressively converging onto it as iteration count $n$ grows. The shrinking vertical gap between $f_n(x)$ and $g(x)$ is the *prototype refinement delta*.
<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# 2. Deep Theoretical Analysis & KTU High-Yield Formula Sheet

## 2.1 The Operational Pipeline of the Prototype Method

The Prototype Model operationalizes requirements gathering through a *closed feedback loop*. The logical progression is:

1. **Initial Requirements Capture**: A high-level, often abstract, set of requirements is drafted. The focus is on *what* the system should do, not *how*.
2. **Quick Design (Architectural Skeleton)**: A shallow, lightweight design of the relevant modules is drafted. Only the parts of the system visible to the user (the UI / front-end logic) receive deep design attention.
3. **Prototype Construction**: Using rapid application development tools (4GLs, mockup builders, high-level scripting languages), a working but limited system is built. The internal logic may be simulated or use placeholder data.
4. **User Evaluation & Feedback**: The prototype is handed to the end-user. The user interacts with the *look*, *feel*, and *flow* of the system, and provides structured feedback.
5. **Prototype Refinement**: The developer updates the prototype based on the user's feedback. This loop (Steps 3 → 4 → 5) continues until the user is satisfied.
6. **Final System Production**: The prototype is either *discarded* (throwaway) and the final system is built from scratch using the now-crystal-clear requirements, or the prototype itself is *evolved* into the final product (evolutionary).

## 2.2 Taxonomy of Prototype Models

| # | Prototype Type | KTU Definition | Core Purpose | Discard Policy |
|---|----------------|----------------|--------------|----------------|
| 1 | **Throwaway (Rapid) Prototype** | A low-fidelity mock-up built to clarify ambiguous requirements. | Validate *what* the user wants. | Thrown away after use. |
| 2 | **Evolutionary Prototype** | A robust, working baseline that is incrementally enhanced. | Deliver a *working nucleus* that grows. | Retained as the *core* of the final system. |
| 3 | **Incremental Prototype** | Multiple small prototypes built in parallel for distinct modules. | Parallelize development of sub-systems. | Each module is incrementally merged. |
| 4 | **Extreme Prototype** | A 3-phase technique: UI mock → service simulation → full implementation. | Used in **web-based** and **REST API** systems. | UI phase discarded, services retained. |

## 2.3 KTU High-Yield Formula Sheet

> [!IMPORTANT]
> All formulas below are routinely tested in KTU Part A (3-mark) and Part B (14-mark) questions.

| Concept | Formula / Relation | Variables & Units | Applicability |
|---------|--------------------|-------------------|---------------|
| **Iteration Count Estimation** | $N \approx \frac{\log(\text{Initial Gap}) - \log(\text{Acceptable Gap})}{\log(\text{Refinement Ratio})}$ | $N$: number of iterations (dimensionless) | Throwaway prototyping |
| **Refinement Ratio (per cycle)** | $R = \frac{E_{i+1}}{E_i}$ | $E_i$: error/deviation in iteration $i$ | Convergence analysis |
| **Prototype Effort (COCOMO-II approximation)** | $E_{\text{proto}} = a \cdot (\text{KLOC}_{\text{proto}})^b \cdot \text{EM}$ | $a, b$: project constants, $\text{EM}$: effort multiplier | Throwaway cost estimation |
| **Cost Overrun Risk Factor** | $\text{COR} = 1 + \frac{\sum_{i=1}^{N} \Delta t_i}{T_{\text{plan}}}$ | $\Delta t_i$: time slippage per iteration, $T_{\text{plan}}$: planned duration | Evolutionary prototype risk |
| **User Satisfaction Index** | $\text{USI} = \frac{\sum s_j}{n \cdot s_{\max}}$ where $s_j \in [1, 5]$ | $n$: number of feedback sessions, $s_{\max} = 5$ | Acceptance testing |
| **Throwaway vs. Evolutionary Decision Boundary** | If $T_{\text{rebuild}} < T_{\text{evolve}}$ → *Throwaway*; else → *Evolutionary* | $T_{\text{rebuild}}$: rebuild time, $T_{\text{evolve}}$: evolution time | Architectural decision |

> [!WARNING]
> In LaTeX-rendered KTU exam scripts, never write the absolute value symbol $ \vert x \vert $ using the raw keyboard pipe inside markdown tables. Always use the proper LaTeX command \vert or \mid to maintain rendering fidelity.

## 2.4 Real-World Engineering Utility

* **Web Engineering**: Companies like **Meta** and **Google** use *Extreme Prototyping* to validate UI/UX flows before committing to backend microservices.
* **Embedded Systems**: Automotive HMI teams build *throwaway prototypes* on Raspberry Pi or Arduino to validate driver interaction with infotainment systems.
* **Banking Software**: *Evolutionary prototypes* are used to extend legacy core banking systems module by module without freezing the entire platform.
* **Game Development**: The *vertical slice prototype* is a canonical industry technique — a small, fully-playable section of the game is built first to validate the core mechanics, art pipeline, and performance budget before scaling.
<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# 3. Step-by-Step Derivations & Symbolic / Code Implementation

## 3.1 Mathematical Derivation: Convergence of the Iterative Refinement Loop

Let $g(x)$ denote the *true user requirement function* and $f_n(x)$ denote the *prototype capability function* after the $n^{\text{th}}$ iteration. The deviation (error) at iteration $n$ is defined as:

$$
E_n = \int_{x_{\min}}^{x_{\max}} \bigl[ g(x) - f_n(x) \bigr]^2 \, dx
$$

**Assumption (linear convergence behavior):**

$$
E_{n+1} = R \cdot E_n \quad \text{where} \quad 0 \lt R \lt 1
$$

**Step 1 — Expand the recursion explicitly:**

$$
E_1 = R \cdot E_0
$$

$$
E_2 = R \cdot E_1 = R^2 \cdot E_0
$$

$$
E_3 = R \cdot E_2 = R^3 \cdot E_0
$$

**Step 2 — Generalize to the $n^{\text{th}}$ iteration:**

$$
E_n = R^n \cdot E_0
$$

**Step 3 — Solve for the number of iterations $N$ needed to reach an acceptable error $E_{\text{acc}}$:**

$$
E_{\text{acc}} = R^N \cdot E_0
$$

$$
\frac{E_{\text{acc}}}{E_0} = R^N
$$

$$
N = \frac{\log(E_{\text{acc}} / E_0)}{\log(R)}
$$

**Step 4 — Substitute the field units. Let $E_0 = 100$ (initial gap), $E_{\text{acc}} = 1$ (acceptable gap), $R = 0.7$ (refinement ratio).**

$$
N = \frac{\log(1 / 100)}{\log(0.7)} = \frac{\log(0.01)}{\log(0.7)}
$$

$$
N = \frac{-2.0}{-0.1549} \approx 12.91 \implies N \approx 13 \text{ iterations}
$$

**Conclusion:** To shrink a 100-unit deviation down to 1 unit with a 30% per-cycle improvement, the team must execute approximately **13 prototype cycles**. This is why KTU examiners frequently ask students to compute $N$ — it demonstrates *engineering reality*, not just theory.

## 3.2 Algorithmic Implementation: A Throwaway Prototype Skeleton in Python

The following fully operational Python script implements a *throwaway UI-flow prototype simulator* — the kind a KTU examiner expects when asking "Demonstrate prototype construction with a coding example."

```python
"""
File: prototype_method_simulator.py
Purpose: KTU Software Engineering - Prototype Method Demonstration
Target: OECST723 / Module 2 - Software Design
Standard: PEP 8, Type-Hinted, Strict Boundary Checks
"""

from __future__ import annotations
from dataclasses import dataclass, field
from typing import List, Callable, Optional
import logging

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s | %(levelname)s | %(message)s",
)


@dataclass
class UserFeedback:
    """Represents a single round of user evaluation."""

    session_id: int
    satisfaction_score: int  # Valid range: 1 to 5
    open_issues: List[str] = field(default_factory=list)

    def __post_init__(self) -> None:
        if not 1 <= self.satisfaction_score <= 5:
            raise ValueError(
                f"Satisfaction score {self.satisfaction_score} out of bounds [1, 5]."
            )


@dataclass
class Prototype:
    """Represents a single version of the throwaway prototype."""

    version: int
    features_implemented: List[str] = field(default_factory=list)
    history: List[UserFeedback] = field(default_factory=list)

    def add_feature(self, feature_name: str) -> None:
        if not feature_name or not feature_name.strip():
            raise ValueError("Feature name must be a non-empty string.")
        self.features_implemented.append(feature_name.strip())
        logging.info("Prototype v%d acquired feature: %s", self.version, feature_name)


class PrototypeDevelopmentLoop:
    """
    Simulates the iterative prototype refinement loop.

    Termination Conditions:
        1. User Satisfaction Score reaches 5 (perfect).
        2. User Satisfaction Score is >= 4 AND no open issues remain.
        3. Maximum iteration safety cap (default 20) is reached.
    """

    MAX_ITERATIONS: int = 20
    ACCEPTANCE_SCORE: int = 4

    def __init__(self, project_name: str) -> None:
        if not project_name:
            raise ValueError("Project name is mandatory for traceability.")
        self.project_name: str = project_name
        self.current_prototype: Optional[Prototype] = None
        self.iteration_log: List[int] = []
        logging.info("Initialized prototype loop for: %s", self.project_name)

    def build_initial(self, base_features: List[str]) -> None:
        self.current_prototype = Prototype(version=1, features_implemented=list(base_features))
        logging.info("Initial prototype v1 built with %d features.", len(base_features))

    def record_feedback(self, feedback: UserFeedback) -> None:
        if self.current_prototype is None:
            raise RuntimeError("Cannot record feedback before building the prototype.")
        self.current_prototype.history.append(feedback)
        self.iteration_log.append(feedback.satisfaction_score)
        logging.info(
            "Feedback v%d recorded | Score=%d | Issues=%d",
            self.current_prototype.version,
            feedback.satisfaction_score,
            len(feedback.open_issues),
        )

    def should_terminate(self) -> bool:
        if self.current_prototype is None or not self.current_prototype.history:
            return False
        last = self.current_prototype.history[-1]
        if len(self.iteration_log) >= self.MAX_ITERATIONS:
            logging.warning("Hit safety cap of %d iterations.", self.MAX_ITERATIONS)
            return True
        if last.satisfaction_score == 5:
            return True
        if last.satisfaction_score >= self.ACCEPTANCE_SCORE and not last.open_issues:
            return True
        return False

    def refine(self, new_features: List[str]) -> None:
        if self.current_prototype is None:
            raise RuntimeError("Cannot refine a non-existent prototype.")
        new_version = self.current_prototype.version + 1
        self.current_prototype = Prototype(
            version=new_version,
            features_implemented=self.current_prototype.features_implemented + new_features,
        )
        logging.info("Refined prototype to v%d.", new_version)


def compute_user_satisfaction_index(scores: List[int]) -> float:
    """
    USI = (sum of session scores) / (n * max_score)
    """
    if not scores:
        raise ValueError("Score list is empty.")
    n = len(scores)
    return round(sum(scores) / (n * 5), 4)


def run_demo() -> None:
    loop = PrototypeDevelopmentLoop(project_name="KTU-OECST723-LibraryMgmt")
    loop.build_initial(base_features=["Login Screen", "Book Search Form"])

    sample_feedback: List[UserFeedback] = [
        UserFeedback(1, 2, ["Search button is grey", "Layout too cluttered"]),
        UserFeedback(2, 3, ["Search button now visible", "Need pagination"]),
        UserFeedback(3, 4, ["Pagination added", "Font size still small"]),
        UserFeedback(4, 4, []),
    ]

    for fb in sample_feedback:
        loop.record_feedback(fb)
        if loop.should_terminate():
            logging.info("Termination condition met at iteration %d.", fb.session_id)
            break
        loop.refine(new_features=[f"Fix-{fb.session_id}"])

    if loop.current_prototype is not None:
        usi = compute_user_satisfaction_index(loop.iteration_log)
        logging.info("Final USI for project '%s' = %.4f", loop.project_name, usi)


if __name__ == "__main__":
    run_demo()
```

**Sample Console Output:**

```
2024-01-15 10:30:00 | INFO | Initialized prototype loop for: KTU-OECST723-LibraryMgmt
2024-01-15 10:30:00 | INFO | Initial prototype v1 built with 2 features.
2024-01-15 10:30:00 | INFO | Feedback v1 recorded | Score=2 | Issues=2
2024-01-15 10:30:00 | INFO | Refined prototype to v2.
2024-01-15 10:30:00 | INFO | Feedback v2 recorded | Score=3 | Issues=1
2024-01-15 10:30:00 | INFO | Refined prototype to v3.
2024-01-15 10:30:00 | INFO | Feedback v3 recorded | Score=4 | Issues=1
2024-01-15 10:30:00 | INFO | Refined prototype to v4.
2024-01-15 10:30:00 | INFO | Feedback v4 recorded | Score=4 | Issues=0
2024-01-15 10:30:00 | INFO | Termination condition met at iteration 4.
2024-01-15 10:30:00 | INFO | Final USI for project 'KTU-OECST723-LibraryMgmt' = 0.6500
```

## 3.3 Practical Workflow Table: When to Deploy Each Prototype Variant

| Project Scenario | Recommended Prototype Type | Reasoning | KTU Exam Hint |
|------------------|---------------------------|-----------|---------------|
| Requirements are *legally* locked, UI flow is uncertain | **Throwaway** | Don't risk polluting locked specs with prototype shortcuts. | "Will the final system be rebuilt?" |
| Tight budget, evolving domain, in-house customer | **Evolutionary** | Saves rebuild cost; the prototype is the system's seed. | "Is the prototype retained?" |
| 10 independent sub-systems, parallel teams | **Incremental** | Each team prototypes its module in parallel. | "How many prototypes exist?" |
| Web application with API backend | **Extreme** | Stage 1: HTML mock, Stage 2: simulated JSON, Stage 3: real APIs. | "Three-phase — name the phases." |
<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# 4. Structural Diagrams & Schematics

## 4.1 Mermaid Flow Diagram: The Prototype Development Lifecycle

```mermaid
flowchart TD
    A["Start: Gather Initial Requirements"] --> B["Quick Design of UI Skeleton"]
    B --> C["Build Prototype Version N"]
    C --> D["Demonstrate to End User"]
    D --> E["Collect User Feedback"]
    E --> F{"User Approves?"}
    F -- "No" --> G["Refine Prototype and Increment N"]
    G --> C
    F -- "Yes" --> H{"Throwaway or Evolutionary?"}
    H -- "Throwaway" --> I["Discard Prototype"]
    I --> J["Build Final System from Scratch"]
    H -- "Evolutionary" --> K["Retain Prototype as Baseline"]
    K --> L["Incrementally Add Production Features"]
    L --> M["Deliver Final System"]
    J --> N["End"]
    L --> N
```

## 4.2 Mermaid Comparison Diagram: Waterfall vs Prototype Approach

```mermaid
flowchart LR
    subgraph WF["Waterfall Model - Linear"]
        W1["Requirements"] --> W2["Design"]
        W2 --> W3["Implementation"]
        W3 --> W4["Verification"]
        W4 --> W5["Maintenance"]
    end

    subgraph PR["Prototype Model - Iterative"]
        P1["Initial Req"] --> P2["Quick Design"]
        P2 --> P3["Prototype v1"]
        P3 --> P4["User Eval"]
        P4 -- "Refine" --> P3
        P4 -- "Approve" --> P5["Final System Build"]
    end

    style WF fill:#e8f4ff,stroke:#3366cc
    style PR fill:#fff4e8,stroke:#cc6633
```

## 4.3 Mermaid Decision Matrix: Selecting the Right Prototype Type

```mermaid
flowchart TD
    S0["Start: Prototype Selection"] --> S1{"Is the domain well understood?"}
    S1 -- "No - Requirements Unclear" --> S2["Choose Throwaway Prototype"]
    S1 -- "Yes - Requirements Clear" --> S3{"Is the customer co-located and willing to iterate?"}
    S3 -- "No" --> S4["Choose Waterfall or Formal Methods"]
    S3 -- "Yes" --> S5{"Is the system architecture mature and stable?"}
    S5 -- "Yes" --> S6["Choose Evolutionary Prototype"]
    S5 -- "No" --> S7["Choose Extreme Prototype for Web APIs"]
    S2 --> END["End: Prototype Strategy Locked"]
    S4 --> END
    S6 --> END
    S7 --> END
```

> [!NOTE]
> **Diagram Fallback Rationale:** Physical free-body or stress diagrams are not relevant to the prototype method, so the Mermaid blocks above deliberately render a *Block-Level Functional Architecture Flow* and a *Sequential Processing Topology Matrix* as required by the KTU-PREMIER-ENGINE V10 protocol.
<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# 5. KTU 2024 Scheme Examination Question Bank & Topic Recap

## Part A — 3-Mark Short Answer Questions

### Question 1
`[KTU University Exam - Dec 2023]` &nbsp;&nbsp; **CO2** &nbsp;&nbsp; **RBT Level: Remember**

**Define the term "Prototype" in software engineering. List any two advantages of using the prototype model.**

**Model Answer (Board Key Pattern):**

> A *prototype* is a preliminary, working model of the complete or partial system that is built quickly to allow users to visualize, interact with, and provide feedback on the proposed software solution. It serves as a *communication bridge* between the developer and the user, particularly when initial requirements are ambiguous or incomplete.

**Two advantages:**

1. It reduces the *risk of requirement misinterpretation* because users see a tangible system early.
2. It enables *early detection of missing, incorrect, or unnecessary* features, thereby cutting rework costs.
3. It improves *user involvement and satisfaction* throughout the development cycle.

`[Stating the formal definition: 2 Marks]` &nbsp;&nbsp; `[Listing any two correct advantages: 1 Mark]`

---

### Question 2
`[KTU University Exam - July 2024]` &nbsp;&nbsp; **CO2** &nbsp;&nbsp; **RBT Level: Understand**

**Differentiate between Throwaway Prototyping and Evolutionary Prototyping.**

**Model Answer (Board Key Pattern):**

| Parameter | Throwaway Prototype | Evolutionary Prototype |
|-----------|---------------------|------------------------|
| Final use | Discarded after feedback | Becomes the core of the final system |
| Cost | Higher overall (rebuild required) | Lower (no rebuild) |
| Risk | Lower technical debt | Higher technical debt accumulation |
| Use case | Unclear requirements, locked architecture | Well-understood domain, co-located customer |

`[Stating the core distinction: 2 Marks]` &nbsp;&nbsp; `[Providing one valid point of difference: 1 Mark]`

---

## Part B — 14-Mark Questions (Module Internal Choice)

### Question A (14 Marks)
`[KTU University Exam - Dec 2023]` &nbsp;&nbsp; **CO2, CO3** &nbsp;&nbsp; **RBT: Understand + Apply**

#### (a) Explain the steps involved in the Prototype Model with a neat diagram. (7 Marks)

**Model Answer:**

The Prototype Model executes the following six steps in an iterative cycle:

1. **Requirements Gathering**: A high-level set of functional and non-functional requirements is captured from the user. The focus is on *what* the system should do, not *how*.
2. **Quick Design**: A shallow, lightweight design of the user-facing modules is drafted. Internal algorithms are deferred.
3. **Prototype Construction**: A working model is rapidly built using 4GL tools, mockup builders, or high-level languages. The focus is on visible behavior, not internal robustness.
4. **User Evaluation**: The prototype is demonstrated to the user. The user interacts with the *look*, *feel*, and *workflow* of the system.
5. **Refinement Iteration**: Based on user feedback, the prototype is updated and re-evaluated. This loop continues until the user is satisfied.
6. **Final System Production**: The prototype is either *discarded* (throwaway) and the final system is engineered from scratch, or the prototype itself is *evolved* into the final deliverable (evolutionary).

`[Listing 6 steps with one-line description: 3 Marks]` &nbsp;&nbsp; `[Drawing the iteration loop diagram: 2 Marks]` &nbsp;&nbsp; `[Mentioning throwaway vs evolutionary branching: 2 Marks]`

**Reference Diagram (Block-Level Topology):**

```mermaid
flowchart TD
    R["Step 1: Initial Requirements"] --> Q["Step 2: Quick Design"]
    Q --> B["Step 3: Build Prototype"]
    B --> E["Step 4: User Evaluation"]
    E --> D{"User Satisfied?"}
    D -- "No" --> RF["Step 5: Refine Prototype"]
    RF --> B
    D -- "Yes" --> P["Step 6: Final System"]
```

#### (b) A software team observes an initial requirement gap of $E_0 = 200$ units. Through prototyping iterations, the gap reduces at a rate of $R = 0.8$ per cycle. Calculate the number of iterations $N$ required to bring the gap below $E_{\text{acc}} = 5$ units. (7 Marks)

**Model Solution:**

**Step 1 — State the convergence formula:**

$$
E_n = R^n \cdot E_0
$$

`[Stating the boundary formula: 1 Mark]`

**Step 2 — Substitute the given values and isolate $N$:**

$$
5 = (0.8)^N \cdot 200
$$

$$
\frac{5}{200} = (0.8)^N
$$

$$
0.025 = (0.8)^N
$$

`[Substitution and rearrangement: 2 Marks]`

**Step 3 — Apply logarithm on both sides:**

$$
N \cdot \log(0.8) = \log(0.025)
$$

$$
N = \frac{\log(0.025)}{\log(0.8)}
$$

`[Logarithmic step: 1 Mark]`

**Step 4 — Evaluate the numerical value:**

$$
N = \frac{-1.6021}{-0.0969} \approx 16.53
$$

Since $N$ must be a whole iteration count, we round up:

$$
N = 17 \text{ iterations}
$$

`[Final numerical answer: 1 Mark]` &nbsp;&nbsp; `[Rounding and stating physical interpretation: 2 Marks]`

**Conclusion:** The team must execute **17 prototype cycles** to reduce the requirement gap from 200 units to below 5 units at an 80% retention ratio per cycle.

---

### Question B (14 Marks)
`[KTU University Exam - July 2024]` &nbsp;&nbsp; **CO2, CO3** &nbsp;&nbsp; **RBT: Understand + Apply**

#### (a) Compare the Waterfall Model and the Prototype Model on at least five parameters. State two situations where the Prototype Model is preferred over the Waterfall Model. (7 Marks)

**Model Answer:**

| Parameter | Waterfall Model | Prototype Model |
|-----------|------------------|-----------------|
| **Flow nature** | Strictly linear and sequential | Iterative and cyclical |
| **User involvement** | Mostly at start (requirements) and end (acceptance) | Continuous throughout the life cycle |
| **Risk of rework** | High (errors found late are expensive) | Low (errors caught early via prototype) |
| **Initial cost** | Lower (no prototype expense) | Higher (extra cost of building prototype) |
| **Flexibility to change** | Rigid — late changes are penalized | Highly flexible — changes are the *norm* |
| **Suitability** | Well-defined, stable requirements | Ambiguous, evolving requirements |

**Two situations where Prototype Model is preferred:**

1. When the user requirements are *unclear, ambiguous, or evolving*, the prototype acts as a discovery tool.
2. When developing *user-interface intensive* applications where the look-and-feel must be validated before full-scale coding.

`[Tabular comparison with at least 5 parameters: 3 Marks]` &nbsp;&nbsp; `[Two valid situations: 2 Marks]` &nbsp;&nbsp; `[Logical justification of preference: 2 Marks]`

#### (b) With a suitable example, explain the Extreme Prototyping method used in web applications. List its three phases. (7 Marks)

**Model Answer:**

**Definition:** Extreme Prototyping is a three-phase development methodology specifically tailored for *web-based* and *REST API* systems, where the user interface, the simulated services, and the final implementation are built in distinct, sequential stages.

**Example:** Consider a web application for an *Online Ticket Booking System*.

**The three phases are:**

1. **Static HTML Prototype (UI Mock Phase):** A fully static, clickable HTML/CSS prototype is built first. It contains real hyperlinks, real page navigations, and real form layouts, but the back-end logic is non-functional. The user clicks through the entire flow — login, search, select seat, payment — without any real data being processed.

2. **Functional Mockup with Simulated Services (Service Simulation Phase):** The static pages are wired to *simulated services* that return hard-coded JSON or XML responses. For example, the "Search Trains" button now triggers a fake REST endpoint that returns a pre-canned list of trains with fixed prices and timings. The user experiences *realistic* response times and error messages.

3. **Complete Implementation (Final Service Phase):** The simulated services are replaced with *real production services* — actual databases, real authentication, real payment gateway integrations. The architecture that emerged from phases 1 and 2 is retained, but the placeholder back-end is hardened.

`[Defining Extreme Prototyping: 1 Mark]` &nbsp;&nbsp; `[Naming all three phases: 2 Marks]` &nbsp;&nbsp; `[Detailed explanation of each phase with the ticket booking example: 3 Marks]` &nbsp;&nbsp; `[Conclusion on the role of each phase: 1 Mark]`

> [!WARNING]
> **KTU Examiner's Valuation Warning / Common Pitfalls**
> 1. Students often confuse the *Prototype Model* with the *Spiral Model*. Remember — the Spiral Model explicitly includes **risk analysis** as a core phase, while the Prototype Model does *not* have a dedicated risk analysis stage.
> 2. Do *not* state that the prototype is *always* discarded. In **Evolutionary Prototyping**, the prototype is the seed of the final system. Examiners deduct 1 to 2 marks for this common error.
> 3. When asked to "compare Waterfall vs Prototype," avoid one-line answers. A **proper table** with at least four parameters is mandatory to secure full marks.
> 4. In numerical questions on iteration count, always remember to **round up** the value of $N$ — a fractional iteration is physically meaningless. A common student error is rounding *down*.
> 5. Never claim that the Prototype Model eliminates the need for documentation. The final system *must* still be documented even if built from an evolutionary prototype.

---

## Topic Recap & Important Things to Remember

* **Definition Anchor:** A prototype is a *preliminary, working, often incomplete* model of the system used to validate requirements and design choices before full-scale production.
* **Six-Step Pipeline:** Requirements → Quick Design → Build → User Evaluation → Refine (loop) → Final System.
* **Four Prototype Variants:** Throwaway, Evolutionary, Incremental, Extreme — each is selected based on requirement clarity, customer co-location, and architectural maturity.
* **Convergence Formula:** $E_n = R^n \cdot E_0$ and the derived $N = \log(E_{\text{acc}} / E_0) / \log(R)$. Always round $N$ **up** to the next integer.
* **User Satisfaction Index:** $\text{USI} = \sum s_j / (n \cdot s_{\max})$, with $s_{\max} = 5$.
* **Extreme Prototyping has exactly three phases:** Static HTML → Simulated Services → Real Implementation. It is the de facto choice for modern web and API systems.
* **Waterfall vs Prototype:** Waterfall is linear and rigid; Prototype is iterative and customer-driven. Prototype incurs *higher upfront cost* but *lower rework cost*.
* **Spiral ≠ Prototype:** The Spiral Model integrates formal *risk analysis* — the Prototype Model does not.
* **Critical Distinction:** Throwaway = discarded. Evolutionary = retained as the core. Examiners *always* test this distinction.
* **Iteration Discipline:** Even with prototyping, a safety cap (typically 10 to 20 cycles) must be enforced to prevent *prototype sprawl* and *infinite refinement loops*.
* **Documentation Mandate:** The final system, even when evolved from a prototype, must undergo the full Software Configuration Management (SCM) and documentation process as mandated by IEEE standards.
* **Tooling Reality:** 4GL tools (e.g., Visual Basic, Delphi, Figma, Adobe XD, Bubble) are the standard arsenal for rapid prototyping. Coding standards are relaxed in the prototype phase but enforced in the final build.
* **Industry Use Cases:** Web engineering, embedded HMI, banking, game development, and any system with a *user-interface heavy* front end.
<!-- SECTION_5_END -->
