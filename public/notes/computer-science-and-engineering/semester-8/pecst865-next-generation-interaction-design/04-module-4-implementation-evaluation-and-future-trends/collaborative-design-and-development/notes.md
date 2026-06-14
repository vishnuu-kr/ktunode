# Collaborative design and development

<!-- SECTION_1_START -->
# Collaborative Design and Development in Next-Generation Interaction Design

## 1.1 Formal Academic Definition (KTU 2024 Scheme Terminology)

**Collaborative Design and Development** is a distributed, multi-stakeholder interaction design paradigm in which designers, developers, end-users, domain experts, and AI-augmented agents jointly ideate, prototype, evaluate, and iterate on user interfaces and experiences through shared artifacts, synchronous/asynchronous communication channels, and version-controlled design systems.

In the context of **PECST865 – Next Generation Interaction Design**, the term encompasses three integrated layers:

1. **Intra-disciplinary collaboration** – between interaction designers, UX researchers, and visual designers.
2. **Inter-disciplinary collaboration** – between designers and software engineers, data scientists, and HCI specialists.
3. **Human-AI collaboration** – where generative AI tools (LLMs, diffusion models, co-pilots) act as active design partners in the loop.

> [!IMPORTANT]
> **KTU 2024 Syllabus Highlight (Module 4):** Collaborative design and development is positioned as a critical competency for evaluating how distributed teams, remote co-design sessions, and AI co-creation pipelines affect the *implementation* and *evaluation* phases of the interaction design lifecycle.

### Conceptual Analogy / Intuition

Imagine a **modern jazz ensemble recording a track in a distributed studio**:

- Each musician (interaction designer, developer, user researcher) contributes a unique instrument.
- They do **not** play the entire piece alone — instead, they follow a **shared chord chart** (the design system, Figma library, Git repository) that everyone can read in real time.
- A **conductor with headphones** (the design lead or AI co-pilot) ensures that improvisations from one musician do not clash with another.
- The track is **recorded in layers** (version-controlled commits, branch merges, design tokens), so a mistake in the drum track can be reverted without losing the entire session.

This is exactly how collaborative design works: **a shared vision, distributed expertise, versioned artifacts, and a feedback loop** that allows safe experimentation.

### Key Constituents of the Paradigm

| Constituent | Description |
|---|---|
| **Shared Design System** | A living library of components, tokens, and patterns (e.g., Material 3, Polaris, Carbon). |
| **Version Control** | Git-based design versioning (Figma branching, Abstract, GitHub). |
| **Co-Creation Platforms** | Figma, Miro, FigJam, Adobe XD, Framer, and code-based UIs. |
| **AI Co-Design Agents** | Generative UI tools (Galileo AI, Uizard, Figma AI, GitHub Copilot). |
| **Stakeholder Loops** | User testing, A/B feedback, telemetry, and participatory workshops. |

> [!NOTE]
> **Geometric / Conceptual Visualisation (Optional):**
> Think of collaborative design as a **3-axis coordinate system**:
> - $X$-axis $\rightarrow$ **Time** (Discovery $\rightarrow$ Define $\rightarrow$ Design $\rightarrow$ Develop $\rightarrow$ Deploy)
> - $Y$-axis $\rightarrow$ **Role Diversity** (Designer, Developer, Researcher, User, AI)
> - $Z$-axis $\rightarrow$ **Artifact Granularity** (Sketch $\rightarrow$ Wireframe $\rightarrow$ Mockup $\rightarrow$ Prototype $\rightarrow$ Production)
> A successful project traces a continuous path through this 3-D space, with each collaborator occupying a different projection at any given moment.

<!-- SECTION_1_END -->

<!-- SECTION_2_START -->
# Deep Theoretical Analysis & KTU High-Yield Reference Sheet

## 2.1 Theoretical Foundations

Collaborative design draws from four intersecting theoretical traditions:

1. **Participatory Design (PD)** — Scandinavian origin (1970s). End-users are *co-authors* of the system, not merely subjects of study.
2. **Co-Design** — Sanders & Stappers (2008). Frames users as *experts of their lived experience* working alongside professional designers.
3. **Distributed Cognition (Hutchins)** — Treats the design team + tools + artifacts as a single cognitive system.
4. **Activity Theory (Engeström)** — Models collaboration as mediated activity with rules, community, and division of labour.

### 2.2 The Five Pillars of Collaborative Design and Development

**Pillar 1 — Shared Mental Model**

- Every team member holds a *roughly identical* understanding of user goals, business constraints, and technical feasibility.
- Achieved through: design briefs, journey maps, storyboards, and "show, don't tell" prototypes.

**Pillar 2 — Asynchronous and Synchronous Continuity**

- Synchronous: real-time whiteboarding, pair designing, mob programming, live prototyping in Figma.
- Asynchronous: recorded walkthroughs (Loom), GitHub pull-request reviews, design system documentation.
- Modern stacks blend both seamlessly (e.g., Figma + Slack + Linear + GitHub).

**Pillar 3 — Versioned and Traceable Artifacts**

- Every design decision is **recorded, reversible, and attributable** to a stakeholder.
- Tools: Figma version history, Abstract, Git LFS for design assets, Notion changelogs.

**Pillar 4 — Role Fluidity and Role Clarity**

- The **inverse T-model**: deep specialisation in one role, broad literacy across others.
- Example: A developer who can *read* a Figma file and a designer who can *inspect* a React component.

**Pillar 5 — Human-AI Symbiosis**

- AI agents handle **divergent exploration** (mass ideation, layout generation, content variants).
- Humans handle **convergent judgment** (ethical decisions, brand voice, user empathy, accessibility).
- This division is captured by the formula:

$$
\text{Design Value} = f(\text{Human Judgment}, \text{AI Throughput}, \text{Stakeholder Trust})
$$

## 2.3 KTU Reference Sheet — Comparative Matrix of Collaborative Methods

| Method | Origin | Stakeholder Role | Strength | Limitation | Typical KTU Exam Use |
|---|---|---|---|---|---|
| **Participatory Design (PD)** | Scandinavia, 1970s | Co-author | Deep user empowerment | Time-intensive, requires skilled facilitation | Definition + historical context |
| **Co-Design Workshops** | Sanders, 2008 | Expert of experience | Rich qualitative insights | Hard to scale to large product teams | Module 4 application question |
| **Design Sprints (GV)** | Google Ventures, 2010s | Time-boxed collaborator | Rapid validation in 5 days | Compresses divergent thinking | 14-mark case study |
| **Mob / Pair Designing** | Agile (poppendieck) | Real-time co-creator | Knowledge transfer, fewer defects | Requires mature team culture | 3-mark short answer |
| **Open-Source / Community Design** | Linux, Wikipedia | Distributed volunteer | Massive parallelism | Governance and IP challenges | Future-trends question |
| **AI-Augmented Co-Creation** | 2022–present | Generative partner | 10× ideation throughput | Risk of homogenised outputs | Module 4 + Module 5 bridge |
| **DesignOps / Design Systems** | In-house, 2015+ | Scaled governance | Component reuse, consistency | Bureaucracy if over-engineered | Implementation evaluation Q |

## 2.4 Tools Ecosystem (KTU Industry-Relevant Vocabulary)

| Layer | Tools |
|---|---|
| **Visual Collaboration** | Figma, FigJam, Miro, Whimsical, Mural |
| **Design Versioning** | Abstract, Figma Branching, Git LFS |
| **Code–Design Bridge** | Storybook, Chromatic, Bit.dev, Plasmic |
| **AI Co-Design** | Galileo AI, Uizard, Visily, Figma AI, v0.dev |
| **Async Communication** | Loom, Notion, Linear, Slack, Confluence |
| **User Research Sync** | Dovetail, Maze, UserTesting, Lookback |

## 2.5 Real-World Engineering Utility

- **Startup MVP**: A 3-person designer-developer-researcher team can ship a validated product in 6 weeks using Figma + GitHub + Loom + an LLM.
- **Enterprise scale**: Companies like Airbnb, Spotify, and Microsoft maintain open **Design Systems** (Polaris, Carbon, Fluent 2) that allow 500+ designers and 5000+ engineers to co-build interfaces without drift.
- **Healthcare and accessibility**: Co-design with disabled users is now a regulatory requirement in EU Accessibility Act (2025) — direct KTU exam relevance.

> [!TIP]
> For the KTU board exam, always anchor your answer in **at least one named method** (PD, Co-Design, Design Sprint, DesignOps) and **at least one named tool** (Figma, Miro, GitHub). Examiners explicitly award marks for "industry vocabulary."

<!-- SECTION_2_END -->

<!-- SECTION_3_START -->
# Step-by-Step Frameworks, Case Analysis & Symbolic Implementation

## 3.1 The Co-Design Canvas — A Step-by-Step Operational Framework

Since this topic is a **humanities/management-style subject** (interaction design methodology), the KTU 2024 evaluation matrix expects a *tabular comparative analysis mapping real-world engineering case frameworks to regulatory or systemic matrices*. Below is an exhaustive 7-step framework that a KTU examiner can use to award full marks.

### Step 1 — Frame the Shared Problem
- Convene a kickoff with all roles present: designer, developer, researcher, product manager, **and** a representative end-user.
- Produce a one-page **Problem Statement** using the formula:

$$
\text{Problem Statement} = \{\text{User}, \text{Need}, \text{Context}, \text{Constraint}\}
$$

### Step 2 — Map the Stakeholder Ecosystem
- Build a **Stakeholder Map** with four quadrants: *High Power / High Interest*, *High Power / Low Interest*, *Low Power / High Interest*, *Low Power / Low Interest*.
- Triage engagement frequency accordingly.

### Step 3 — Choose the Collaboration Modality
- Use the following decision table:

| If the team is… | And the timeline is… | Then use… |
|---|---|---|
| Co-located | < 1 week | Design Sprint (5-day) |
| Remote | 2–4 weeks | Co-Design Workshops + Miro |
| Hybrid | Ongoing | DesignOps + Design System |
| Global | Multi-quarter | Open-source model + RFCs |
| AI-first | Variable | AI-Augmented Co-Creation |

### Step 4 — Establish the Shared Artifact Layer
- Pick **one source of truth** for design (e.g., Figma library).
- Pick **one source of truth** for code (e.g., monorepo + Storybook).
- Link them via **design tokens** that flow from Figma Variables to CSS / Swift / Compose.

### Step 5 — Run Iterative Build-Measure-Learn Loops
- Each loop spans 1–2 weeks and ends with a *demonstrable artifact* (Loom video, deployed link, Figma prototype).

### Step 6 — Codify the Decisions
- Use **ADRs (Architecture Decision Records)** for major trade-offs.
- Use **Design Decision Logs** in Notion/Confluence.
- Use **Git commits** for code-level decisions.

### Step 7 — Evaluate the Collaboration Itself
- After each cycle, run a **retrospective** on three axes:
  1. *Velocity* — Did we ship faster?
  2. *Quality* — Did defect density drop?
  3. *Inclusion* — Did every voice get heard?

## 3.2 Real-World Case Framework Matrix

| Industry Case | Method Applied | Tool Stack | Regulatory / Systemic Anchor | Outcome Metric |
|---|---|---|---|---|
| **Airbnb — Design System "DSLR"** | DesignOps + Open Contribution | Figma, React, Storybook | WCAG 2.2 accessibility compliance | 38 % reduction in design-to-dev cycle time |
| **Gov.uk — GOV.UK Design System** | Open-Source + PD | GitHub, Backstage, Heroku | UK Government Digital Service Standard | £4.2 B saved over a decade |
| **Spotify — Squad Model** | Squad-based PD | Figma, Jira, Confluence | Internal agile governance | 67 % of features ship with < 5 % defect rate |
| **Microsoft — Inclusive Design Toolkit** | Co-Design with disabled users | Figma, Azure DevOps | EU Accessibility Act 2025, Section 508 | 100 % of Fluent 2 components WCAG-AA |
| **IKEA — Democratic Design Days** | Large-scale Co-Design | Miro, in-person workshops | Internal sustainability goals | 12 co-created products per year |
| **Linux Kernel** | Open-source distributed collaboration | Mailing lists, Git, IRC | GPL governance | 30 M+ lines of code, 4000+ contributors |
| **OpenAI — ChatGPT Iterations** | AI-Augmented Co-Creation | RLHF, internal evals | EU AI Act high-risk classification | Multi-month red-team cycles with 100+ external experts |

## 3.3 Symbolic / Pseudo-Code Implementation of a Collaboration Loop

Although this is a design topic, the KTU 2024 scheme rewards students who can express methodology in a **structured, code-like notation**. Below is a Python-style pseudo-implementation of a collaborative design iteration:

```python
from dataclasses import dataclass, field
from typing import List, Optional
from datetime import datetime
import logging

logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

@dataclass
class Stakeholder:
    role: str            # e.g. "UX Designer", "Developer", "End-User", "AI-Agent"
    expertise_score: int # 1 to 10

@dataclass
class DesignArtifact:
    version: str
    source_of_truth: str # e.g. "Figma", "GitHub", "Storybook"
    url: Optional[str] = None

@dataclass
class CollaborationLoop:
    cycle_id: int
    problem_statement: str
    stakeholders: List[Stakeholder] = field(default_factory=list)
    artifacts: List[DesignArtifact] = field(default_factory=list)
    decisions: List[str] = field(default_factory=list)

    def add_stakeholder(self, s: Stakeholder) -> None:
        if not (1 <= s.expertise_score <= 10):
            logging.error(f"Invalid expertise score for {s.role}: must be 1-10")
            return
        self.stakeholders.append(s)
        logging.info(f"Stakeholder added: {s.role}")

    def ship_artifact(self, artifact: DesignArtifact) -> None:
        if artifact.source_of_truth not in {"Figma", "GitHub", "Storybook", "Miro"}:
            logging.warning(f"Unapproved source-of-truth: {artifact.source_of_truth}")
        self.artifacts.append(artifact)
        logging.info(f"Artifact v{artifact.version} shipped to {artifact.source_of_truth}")

    def log_decision(self, decision: str, author: str) -> None:
        entry = f"[{datetime.utcnow().isoformat()}] {author}: {decision}"
        self.decisions.append(entry)
        logging.info(entry)

    def evaluate(self) -> dict:
        # Three-axis retrospective, as defined in Step 7
        velocity_score  = min(10, len(self.artifacts) * 2)
        quality_score   = sum(s.expertise_score for s in self.stakeholders) / max(1, len(self.stakeholders))
        inclusion_score = len({s.role for s in self.stakeholders})  # role diversity count
        return {
            "velocity":  velocity_score,
            "quality":   quality_score,
            "inclusion": inclusion_score,
        }


# ---- Example execution ----
loop = CollaborationLoop(
    cycle_id=1,
    problem_statement="{User: visually impaired, Need: screen reader friendly checkout, Context: e-commerce, Constraint: WCAG 2.2 AA}",
)

loop.add_stakeholder(Stakeholder("UX Designer", 8))
loop.add_stakeholder(Stakeholder("Front-End Developer", 9))
loop.add_stakeholder(Stakeholder("End-User (Visually Impaired)", 10))
loop.add_stakeholder(Stakeholder("AI Co-Pilot", 7))

loop.ship_artifact(DesignArtifact(version="0.1.0", source_of_truth="Figma"))
loop.ship_artifact(DesignArtifact(version="0.1.0", source_of_truth="Storybook"))

loop.log_decision("Use semantic ARIA roles instead of divs.", "Front-End Developer")
loop.log_decision("Adopt focus-visible ring 3px solid #FFD600.", "UX Designer")

print(loop.evaluate())
```

**Output trace (excerpt):**
```
2024-... [INFO] Stakeholder added: UX Designer
2024-... [INFO] Stakeholder added: Front-End Developer
2024-... [INFO] Stakeholder added: End-User (Visually Impaired)
2024-... [INFO] Stakeholder added: AI Co-Pilot
2024-... [INFO] Artifact v0.1.0 shipped to Figma
2024-... [INFO] Artifact v0.1.0 shipped to Storybook
2024-... [INFO] Front-End Developer: Use semantic ARIA roles instead of divs.
2024-... [INFO] UX Designer: Adopt focus-visible ring 3px solid #FFD600.
{'velocity': 4, 'quality': 8.5, 'inclusion': 4}
```

> [!TIP]
> Examiners reward **defensive coding**, **logging**, and **type hints**. The example above demonstrates all three — directly addressing the KTU 2024 lab-style evaluation rubric.

<!-- SECTION_3_END -->

<!-- SECTION_4_START -->
# Structural Diagrams & Schematics

## 4.1 The Collaborative Design Lifecycle (Top-Level Flow)

```mermaid
flowchart TD
    A[Discovery and Research] --> B[Stakeholder Mapping]
    B --> C[Problem Framing]
    C --> D{Modality Decision}
    D -->|Sprint| E[Design Sprint 5D]
    D -->|Workshop| F[Co-Design Workshop]
    D -->|Continuous| G[DesignOps Loop]
    D -->|AI First| H[AI Augmented Co Creation]
    E --> I[Shared Artifact Layer]
    F --> I
    G --> I
    H --> I
    I --> J[Build Measure Learn]
    J --> K{Goals Met}
    K -->|No| D
    K -->|Yes| L[Ship and Codify Decisions]
    L --> M[Retrospective]
    M --> A
```

## 4.2 Subgraph — Stakeholder Roles and Information Flow

```mermaid
flowchart LR
    subgraph Roles[Stakeholder Roles]
        R1[UX Designer]
        R2[Developer]
        R3[Researcher]
        R4[End User]
        R5[AI Co Pilot]
        R6[Product Manager]
    end

    subgraph Artifacts[Shared Artifacts]
        S1[Figma Library]
        S2[Git Repository]
        S3[Storybook]
        S4[Miro Board]
        S5[Notion ADR Log]
    end

    R1 --> S1
    R2 --> S2
    R3 --> S4
    R4 --> S1
    R5 --> S1
    R5 --> S2
    R6 --> S5
    S1 --> S3
    S2 --> S3
    S3 --> R1
    S3 --> R2
    S5 --> R6
```

## 4.3 Subgraph — AI-Augmented Co-Creation Pipeline

```mermaid
flowchart TD
    subgraph Input[Human Input]
        I1[Prompt]
        I2[Constraints]
        I3[Brand Tokens]
    end

    subgraph Engine[AI Engine]
        E1[LLM Planner]
        E2[Diffusion Visual Generator]
        E3[Layout Optimiser]
    end

    subgraph Output[Human Review]
        O1[Variant A]
        O2[Variant B]
        O3[Variant C]
        O4[Selected Variant]
    end

    I1 --> E1
    I2 --> E1
    I3 --> E1
    E1 --> E2
    E1 --> E3
    E2 --> O1
    E2 --> O2
    E3 --> O3
    O1 --> O4
    O2 --> O4
    O3 --> O4
    O4 -->|Feedback| E1
```

## 4.4 Subgraph — Evaluation Triangle (Velocity, Quality, Inclusion)

```mermaid
flowchart TD
    A[Retrospective Trigger] --> B[Measure Velocity]
    A --> C[Measure Quality]
    A --> D[Measure Inclusion]
    B --> E{VQI Balanced}
    C --> E
    D --> E
    E -->|Yes| F[Continue Loop]
    E -->|No| G[Realign Stakeholders]
    G --> A
```

> [!NOTE]
> **Reading guide for KTU answer sheets:** When a 14-mark question asks you to "explain how collaborative design is implemented," draw a single top-level flowchart (Diagram 4.1) and *reference* the subgraphs 4.2, 4.3, 4.4 in your prose. This visual layering is what differentiates a 12-mark answer from a 14-mark answer.

<!-- SECTION_4_END -->

<!-- SECTION_5_START -->
# KTU 2024 Scheme Examination Question Bank & Topic Recap

## 5.1 Part A — Short Answer Questions (3 Marks Each)

### Question 1: [KTU University Exam — July 2024] — CO1, Remember
**Define collaborative design and development. List any four tools used in modern collaborative design workflows.**

**Model Answer (3 Marks):**

Collaborative design and development is a multi-stakeholder interaction design paradigm in which designers, developers, end-users, and AI agents co-create interfaces through shared, version-controlled artifacts. *[Definition: 2 Marks]*

Four tools commonly used are:
1. **Figma** — real-time visual collaboration and design systems.
2. **Miro / FigJam** — asynchronous whiteboarding for co-design workshops.
3. **GitHub** — version control for code and design tokens.
4. **Storybook** — the bridge between design components and production code.

*[Tool list: 1 Mark]*

---

### Question 2: [KTU University Exam — Dec 2023] — CO1, Understand
**Differentiate between Participatory Design (PD) and Co-Design. State one strength of each.**

**Model Answer (3 Marks):**

| Aspect | Participatory Design (PD) | Co-Design |
|---|---|---|
| **Origin** | Scandinavian workplace democracy, 1970s | Sanders and Stappers, 2008 |
| **User Role** | Equal co-author of the system | "Expert of their lived experience" |
| **Strength** | Deep political empowerment of workers; produces ethically grounded systems | Scales to larger, more diverse product teams and integrates well with modern agile workflows |

*[Tabular differentiation: 2 Marks; one strength each: 1 Mark]*

---

## 5.2 Part B — Long Answer Questions (14 Marks, Internal Choice)

### Question A (14 Marks) — [KTU University Exam — July 2024] — CO2, Apply / Analyse

**(a)** Explain the **five pillars of collaborative design and development**. For each pillar, give one real-world example from industry. *(7 Marks)*

**(b)** Design a **14-week collaborative design plan** for a fintech startup building a mobile banking app for senior citizens in rural Kerala. Specify the method, tools, and stakeholders for each phase. *(7 Marks)*

---

### Model Solution — Question A

#### (a) The Five Pillars — 7 Marks

| Pillar | Explanation *(1 Mark each)* | Real-World Example *(0.4 Mark each)* |
|---|---|---|
| **1. Shared Mental Model** | Every team member holds a roughly identical understanding of user, business, and technical goals, achieved via design briefs, journey maps, and prototypes. | Airbnb's "DSLR" design system documentation; every new hire reads the same 30-page brief. |
| **2. Sync + Async Continuity** | Synchronous sessions (pair design, mob programming) and asynchronous loops (Loom, PR reviews) blend into a single continuous workflow. | GitHub pull-request culture + Figma live cursors used together at Microsoft Fluent team. |
| **3. Versioned Artifacts** | Every decision is recorded, reversible, and attributable. | Abstract + Figma branching used at Spotify to track 50+ parallel design variants. |
| **4. Role Fluidity and Role Clarity** | The inverse-T model: deep specialisation plus broad literacy. | Designers at Shopify can inspect Liquid code; developers contribute to Polaris tokens. |
| **5. Human-AI Symbiosis** | AI handles divergent exploration; humans handle convergent judgment, ethics, and empathy. | Galileo AI + Uizard used at BCG for rapid client workshop mock-ups. |

*[Valuation key: 5 × 1 Mark for explanations = 5 Marks; 5 × 0.4 Mark for examples = 2 Marks; Total = 7 Marks]*

#### (b) 14-Week Collaborative Design Plan — 7 Marks

| Week | Phase | Method | Tools | Stakeholders | Marks |
|---|---|---|---|---|---|
| 1 | Discovery | Stakeholder interviews | Notion, Loom | PM, Researcher, 5 senior users | 1 |
| 2 | Co-Design Workshop #1 | Card sorting + empathy mapping | Miro, FigJam | Designer, Researcher, Users, Bank Officer | 1 |
| 3 | Problem Framing | "How Might We" sessions | Miro | All roles | 0.5 |
| 4–5 | Concept Ideation | AI-Augmented Co-Creation | Uizard, Figma AI | Designer, AI Co-Pilot, Users | 1 |
| 6 | Design Sprint (5-day compressed to 1 week) | GV Sprint lite | Figma, Maze | Designer, Dev, PM, Users | 1 |
| 7 | Hi-Fi Mockups | Component-driven design | Figma + Material 3 | Designer, Dev | 0.5 |
| 8–9 | Prototyping + Usability Test | Moderated remote testing | Lookback, Maze | Researcher, Users, Designer | 1 |
| 10–11 | Build + Design-Dev Sync | Mob programming + Storybook | GitHub, Storybook | Dev, Designer, AI Co-Pilot | 0.5 |
| 12 | Accessibility Audit | Co-design with disabled seniors | Figma, screen reader | Accessibility specialist, Users | 0.5 |
| 13 | Beta Pilot in 2 Kerala districts | Field deployment + WhatsApp feedback | Loom, Google Forms | PM, Users, Bank Officer | 0.5 |
| 14 | Retrospective + Handoff | VQI retrospective | Notion, Linear | All | 0.5 |

*[Valuation key: 14-week plan with method + tools + stakeholders = 7 Marks; rubric distributes marks as above]*

---

### Question B (14 Marks) — [KTU University Exam — Dec 2023] — CO3, Apply / Evaluate

**(a)** With a neat block diagram, describe the **AI-Augmented Co-Creation pipeline**. Mention the role of the human at each stage. *(7 Marks)*

**(b)** Critically evaluate **three risks** of collaborative design and propose one mitigation for each. *(7 Marks)*

---

### Model Solution — Question B

#### (a) AI-Augmented Co-Creation Pipeline — 7 Marks

> *[Block diagram: 4 Marks — must show the three stages Input, AI Engine, Human Review with feedback loop]*

**Stage 1 — Human Input (2 Marks)**
- The human supplies the **prompt**, **constraints** (e.g., WCAG 2.2 AA, brand tokens), and **guardrails** (e.g., "do not use stock photography of young people, this app is for senior citizens").
- This is the **ethical anchor** of the pipeline.

**Stage 2 — AI Engine (2 Marks)**
- **LLM Planner** decomposes the prompt into sub-tasks (layout, copy, illustration).
- **Diffusion Visual Generator** produces N image variants.
- **Layout Optimiser** ensures grid alignment, spacing, and contrast.

**Stage 3 — Human Review (1 Mark)**
- The human curates variants A, B, C, selects the best, and feeds structured feedback back into Stage 1.
- The human owns the **convergent judgment** step; AI does not auto-publish.

*[Valuation key: Diagram 4 Marks + Stage explanations 3 Marks = 7 Marks]*

#### (b) Three Risks and Mitigations — 7 Marks

| Risk | Explanation *(1 Mark)* | Mitigation *(1.33 Marks)* |
|---|---|---|
| **1. Homogenisation of Design** | When many teams use the same AI tools (Galileo AI, Midjourney), outputs converge to a "global average" aesthetic, eroding brand distinctiveness. | Maintain a **brand-specific fine-tuned model** + curated reference library; enforce design-token constraints. |
| **2. Loss of User Empathy** | AI-generated personas can be statistically plausible but lack the *lived emotional texture* required for inclusive design. | Mandate **at least one co-design session per cycle with real end-users**; treat AI personas as *directional*, not *evidential*. |
| **3. IP and Provenance Ambiguity** | Generative models may output designs resembling copyrighted training data, exposing teams to legal risk. | Adopt a **provenance ledger** (e.g., C2PA metadata) and a **human-in-the-loop sign-off** for every shipped artifact. |

*[Valuation key: 3 × 1 Mark risk explanation + 3 × 1.33 Mark mitigation depth = 7 Marks]*

---

> [!WARNING]
> **KTU Examiner's Valuation Pitfall Callout:**
> 1. **Do NOT** answer 14-mark questions with bullet-only lists. You must include at least one **diagram, table, or framework** in *each* sub-part. Examiners explicitly reserve 2–3 marks for visual structure.
> 2. **Do NOT** confuse "Participatory Design" with "User-Centered Design" (UCD). PD implies *power-sharing*; UCD implies *user consideration*. Mixing them is a guaranteed 1-mark deduction.
> 3. **Do NOT** omit the **stakeholder names** when describing a collaborative workflow. Vague phrases like "the team collaborates" will lose 1–2 marks. Always name roles: designer, developer, researcher, end-user, AI agent.
> 4. **Do NOT** skip the **feedback loop** in your AI co-creation diagram. The arrow back from "Human Review" to "LLM Planner" is worth 1 full mark.

---

## 5.3 Topic Recap & Important Things to Remember

- **Core Definition:** Collaborative design and development is a multi-stakeholder, version-controlled, AI-augmented co-creation paradigm spanning intra-disciplinary, inter-disciplinary, and human-AI collaboration.
- **Five Pillars:** (1) Shared mental model, (2) Sync + async continuity, (3) Versioned artifacts, (4) Role fluidity with role clarity, (5) Human-AI symbiosis.
- **Historical Roots:** Participatory Design (1970s Scandinavia) → Co-Design (Sanders, 2008) → Design Sprints (GV, 2010s) → DesignOps (2015+) → AI-Augmented Co-Creation (2022+).
- **Must-Know Tools:** Figma, Miro, FigJam, GitHub, Storybook, Notion, Loom, Maze, Lookback, Galileo AI, Uizard, v0.dev.
- **Stakeholder Quadrant:** Always classify stakeholders by *power × interest* before engagement.
- **Source-of-Truth Rule:** Exactly one source of truth for design (Figma library) and exactly one for code (Git repository). Link them via design tokens.
- **Three-Axis Retrospective:** Velocity, Quality, Inclusion (VQI). Realign if the triangle is skewed.
- **AI Pipeline Stages:** Input $\rightarrow$ LLM Planner $\rightarrow$ Diffusion Generator + Layout Optimiser $\rightarrow$ Human Review $\rightarrow$ Feedback loop.
- **Risks:** Homogenisation, loss of empathy, IP/provenance ambiguity. Always pair each risk with a concrete mitigation.
- **Regulatory Anchors (KTU-favoured vocabulary):** WCAG 2.2 AA, EU Accessibility Act 2025, EU AI Act, Section 508, GDPR, UK GDS Standard.
- **Exam Mantra:** *Name the method + name the tool + show the loop + cite the regulation.* This four-part pattern alone secures 12 of 14 marks in any KTU long-answer question on this topic.

<!-- SECTION_5_END -->
